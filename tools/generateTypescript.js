'use strict';

function generateTitle(name) {
  return '## ' + name + ' `<' + name + '/>`';
}

function generateDesciption(description) {
  return description + '\n';
}

function generateComment(comment) {
  return '//' + comment.replace('\n', '\n//');
}

function generatePropType(type) {
  switch (type.name) {
    case 'string':
    case 'boolean':
    case 'number':
    case 'any':
    case 'void':
      return type.name;
    case 'bool':
      return 'boolean';
    case 'func':
      return '(...args:any[]) => any';
    case 'enum':
      if (Array.isArray(type.value)) {
        let types = Object.keys(
          type.value.reduce((acc, value) => {
            if(!isNaN(parseInt(value.value))) {
              acc["number"] = true;
            } else {
              acc[value.value] = true;
            }
            return acc;
          },
          {})
        );
        console.log(type.value, types);
        return types.join(' | ');
      }
      return type.value;
    case 'union':
      return type.value.map(generatePropType).join(' | ');
    case 'element':
      return 'React.ClassicElement<any>';
    case 'node':
      return 'React.ReactNode';
    case 'array':
      return 'any[]';
    case 'object':
      return 'Object';
  }
  
  // Default to any for unkown
  return 'any';
}

function generateProp(propName, prop) {
  if (!prop.description) {
    if (propName === 'className') {
      prop.description = 'Additional class(es) for custom styling.';
    } else if (propName === 'children') {
      prop.description = 'Children to pass through the component.';
    }
  }

  return (prop.description ? generateComment(prop.description) : '') + '\n' + ('' + (prop.defaultValue ? generateComment('Default: ' + prop.defaultValue.value) + '\n' : '')) + ('' + propName + (!prop.required ? '?' : '') + ': ') + ((prop.type ? generatePropType(prop.type) : 'any') + ';');
}

function generatePropsInterface(name, props) {
  if (!props) {
    return `interface ${name}Props extends React.DOMAttributes {}\n`;
  }

  return 'interface ' + name + 'Props extends React.DOMAttributes {\n' + Object.keys(props).sort().map(function (propName) {
    return generateProp(propName, props[propName]);
  }).join('\n') + '\n}\n';
}

function generateComponentDefinition(name, description) {
  return generateComment(description) + '\n' + ('declare const ' + name + ': React.ComponentClass<' + name + 'Props>;');
}

function generateDefinition(name, reactAPI) {
  var markdownString =
    `
import * as React from "react";

${generatePropsInterface(name, reactAPI.props)}

${generateComponentDefinition(name, reactAPI.description)}

export default ${name};
`

  return markdownString;
}

module.exports = generateDefinition;