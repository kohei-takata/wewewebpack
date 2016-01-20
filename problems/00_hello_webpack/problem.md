`$ npm i -g webpack webpack-dev-server`

`main.js`

```
var arg = process.argv[2];
console.log('Hello ' + arg);
```

```
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
```

`$ webpack`

`$ less ./bundle.js`