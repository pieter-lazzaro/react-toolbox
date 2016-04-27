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

const regenerate = false;
const componentGlob = Path.join(process.argv[2], '/*.js');

const outputPath = Path.join(process.argv[2]);

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

    if (componentName === 'index') {
      fulfillments[componentName] = fulfillments[componentName].replace(/export ([a-zA-Z]+) from ('.*');/g, 'export {default as $1} from $2;')
    } else {
      try {
        fulfillments[componentName] = ParseComponent(fulfillments[componentName]);
      } catch (e) {
        console.log("Couldn't find definitions for " + componentName)
        delete fulfillments[componentName]
      }
    }
  }

  return fulfillments;
}).then(fulfillments => {
  let markdown = '';

  for (const componentName in fulfillments) {
    let output;
    if (componentName === 'index') {
      output = fulfillments[componentName]
    } else {

      const reactAPI = fulfillments[componentName];
      console.log("Generating for " + componentName);
      output = GenerateTypescript(componentName, reactAPI)
      
    }
    
    Fs.writeFileSync(Path.join(outputPath, `/${componentName}.d.ts`), output);
  }

  return markdown;
})