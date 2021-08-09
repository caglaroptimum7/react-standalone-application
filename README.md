# react-standalone-application

### Usage,
**Change `webpack.config.js` line: 44**

```javascript
path: path.resolve(__dirname, '../webpack-boilerplate/src/js/libs'), // dist folder will be changed.
```

```html
<div id="app" data-argument="Sample" data-another-argument="Test"></div>
```

Install dependencies:
```npm
npm install
```

For development:
```npm
npm run dev
```

For production:
```npm
npm build
```