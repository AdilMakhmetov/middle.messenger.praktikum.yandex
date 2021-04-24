const express = require('express');
const app = express();
const path = require('path');
const Bundler = require('parcel-bundler');

const PORT = 3000;

app.use('/', express.static(path.join(__dirname, '/dist')));
app.use('/static', express.static(path.join(__dirname, '/static')));

const entryFiles = path.join(__dirname, '/static/index.html');

const options = {
  outDir: './dist',
  outFile: 'index.html',
  watch: true,
  minify: false, // Minify files, enabled if process.env.NODE_ENV === 'production'
  target: 'browser', // Browser/node/electron
//   publicUrl: '/', // The url to serve on, defaults to '/'
//   cache: true, // Enabled or disables caching, defaults to true
//   cacheDir: '.cache', // The directory cache gets put in, defaults to .cache
//   contentHash: false, // Disable content hash from being included on the filename
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
//   sourceMaps: true, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
//   hmrHostname: '', // A hostname for hot module reload, default to ''
//   detailedReport: false, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
//   autoInstall: true, // Enable or disable auto install of missing dependencies found during bundling
};

const bundler = new Bundler(entryFiles, options);

app.use(bundler.middleware());
app.listen(PORT);
