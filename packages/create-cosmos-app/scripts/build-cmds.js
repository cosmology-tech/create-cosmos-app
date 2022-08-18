const fs = require('fs');
const path = require('path');
const glob = require('glob').sync;
const Case = require('case');
const { pascal } = require('case');

const makeCommands = (folder) => {
  const SuperName = pascal(folder);
  const srcDir = path.resolve(`${__dirname}/../src/${folder}`);

  const cmds = path.resolve(`${__dirname}/../src/cmds.js`);

  const paths = glob(`${srcDir}/**.[j|t]s`).map((file) => {
    const [, name] = file.match(/\/(.*)\.[j|t]s$/);

    let str = path
      .relative(path.dirname(cmds), file)
      .replace(/\.js$/, '')
      .replace(/\.ts$/, '');
    if (!str.startsWith('.')) str = `./${str}`;

    return {
      name: path.basename(name),
      param: Case.kebab(path.basename(name)),
      safe: Case.snake(folder + '_' + path.basename(name)),
      path: str
    };
  });

  const imports = paths
    .map((f) => {
      return [`import _${f.safe} from '${f.path}';`];
    })
    .join('\n');

  const out = `
  ${imports}
  const ${SuperName} = {};
  ${paths
    .map((a) => {
      return `${SuperName}['${a.param}'] = _${a.safe};`;
    })
    .join('\n')}
  
    export { ${SuperName} }; 
  
    `;

  return out;
};

fs.writeFileSync(`${__dirname}/../src/cmds.js`, makeCommands('templates'));
