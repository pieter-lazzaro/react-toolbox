import Fs from 'fs';
import GenerateTypescript from './generateTypescript';
import Glob from 'glob';
import Path from 'path';
import { parse as ParseComponent } from 'react-docgen';
import Promise from 'bluebird';

const getComponentName = (filepath) => {
  let name = Path.basename(filepath);
  let ext;
  while ((ext = Path.extname(name))) {
    name = name.substring(0, name.length - ext.length);
  }
  return name;
};

const componentGlob = Path.join(process.argv[2], '/*.js');
const outputPath = process.argv[2].replace('components', 'lib');
new Promise((resolve, reject) => {
  Glob(componentGlob, (err, files) => {
    if (err) {
      return reject(err);
    }

    return resolve(files);
  });
}).then(filePaths => {
  const files = {};
  filePaths.forEach(path => {
    files[getComponentName(path)] = new Promise((resolveRead, rejectRead) => {
      Fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          return rejectRead(err);
        }

        return resolveRead(data);
      });
    });
  });

  return Promise.props(files);
}).then(fulfillments => {
  for (const componentName in fulfillments) {
      
      if(componentName === 'index') {
          Fs.writeFileSync(Path.join(outputPath, `/${componentName}.d.ts`), fulfillments[componentName]);
      }
      
      try {
        fulfillments[componentName] = ParseComponent(fulfillments[componentName]);      
      } catch (e) {
          delete fulfillments[componentName]
      }
    
  }

  return fulfillments;
}).then(fulfillments => {
  let markdown = '';

  for (const componentName in fulfillments) {
      
    const reactAPI = fulfillments[componentName];
    console.log("Generating for " + componentName);
    
    Fs.writeFileSync(Path.join(outputPath, `/${componentName}.d.ts`), GenerateTypescript(componentName, reactAPI));
  }

  return markdown;
})