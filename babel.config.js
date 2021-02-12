module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  ignore: [
    '**/node_modules',
    '**/package.json',
    'package.json'
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true
      }
    ],
    [
      'transform-export-extensions'
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    'babel-plugin-parameter-decorator',
    [
      '@babel/plugin-proposal-class-properties'
    ]
  ],
  shouldPrintComment: comments => comments.indexOf('694906H') >= 0
};
