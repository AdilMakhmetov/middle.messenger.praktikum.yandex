const express = require('express');
const app = express();
const path = require('path');
const Bundler = require('parcel-bundler');
const fse = require('fs-extra');

const PORT = 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';
const STATIC_SRC = path.join(__dirname, '/static');
const STATIC_DEST = path.join(__dirname, '/dist/static');
const DIST = path.join(__dirname, '/dist');
const ENTRY_SRC = path.join(__dirname, '/src/index.html');
const ENTRY_DEST = path.join(__dirname, '/dist/index.html');
const STYLES = path.join(__dirname, '/src/styles/*.scss');
const TEMPLATES = path.join(__dirname, '/src/templates/*.js');

fse.copySync(STATIC_SRC, STATIC_DEST, { overwrite: true }, (e) => {
  console.log(e ? e : 'Static copied successful');
})

app.use('/', express.static(DIST));
app.use('/static', express.static(STATIC_DEST));

const options = {
  outDir: './dist',
  outFile: 'index.html',
  publicUrl: '/',
  watch: false,
  minify: false, // Minify files, enabled if process.env.NODE_ENV === 'production'
  target: 'browser', // Browser/node/electron
  autoInstall: true,
  cache: true,
  cacheDir: '.cache',
  contentHash: false,
//   global: 'moduleName', // Expose modules as UMD under this name, disabled by default
//   scopeHoist: false, // Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
//   bundleNodeModules: false, // By default, package.json dependencies are not included when using 'node' or 'electron' with 'target' option above. Set to true to adds them to the bundle, false by default
//   https: { // Define a custom {key, cert} pair, use true to generate one or false to use http
//     cert: './ssl/c.crt', // Path to custom certificate
//     key: './ssl/k.key' // Path to custom key
//   },
//   logLevel: 3, // 5 = save everything to a file, 4 = like 3, but with timestamps and additionally log http requests to dev server, 3 = log info, warnings & errors, 2 = log warnings & errors, 1 = log errors, 0 = log nothing
//   hmr: true, // Enable or disable HMR while watching
//   hmrPort: 0, // The port the HMR socket runs on, defaults to a random free port (0 in node.js resolves to a random free port)
//   hmrHostname: '', // A hostname for hot module reload, default to ''
//   detailedReport: false, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
};

options.sourceMaps = IS_DEV;

const bundler = new Bundler([ENTRY_SRC, STYLES], options);
// bundler.addBundleLoader('styles', )

app.use(bundler.middleware());

app.get('*', function(req, res) {
  res.sendFile(ENTRY_DEST);
});

if (IS_DEV) app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});
