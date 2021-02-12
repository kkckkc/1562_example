const path = require('path');
const fs = require('fs');
const babel = require('@babel/core');

const transpile = (sourceFile) => {
  const result = babel.transformFileSync(sourceFile, {
    sourceMaps: 'inline',
    sourceFileName: `../${sourceFile}`
  });
  fs.writeFileSync(`output/${sourceFile}`.replace('.ts', '.js'), result.code);
}

transpile('test.js');
transpile('run.js');

