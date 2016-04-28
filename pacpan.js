'use strict';

const browserify = require('browserify');
const errorify = require('errorify');
const fs = require('fs');
const watchify = require('watchify');

// deps that panels already bundles for us
const externals = [
  'react',
  'panels-ui'
];

// name of your app as panels would see it (generally it's the domain name)
const expose = require('./package.json').name;

const out = `${__dirname}/playground/app.js`;

const transform = [
  ['rollupify', {config: 'rollup.config.js'}]
];

const shouldWatch = process.argv[2] === 'watch';

const b = browserify(shouldWatch ? {
  cache: {},
  entries: [`${__dirname}/index.js`],
  packageCache: {},
  plugin: [errorify, watchify],
  transform
} : {
  entries: [`${__dirname}/index.js`],
  plugin: [errorify],
  transform
});

// entry point of our app
b.require(`${__dirname}/index.js`, {expose});

// declare our build's externals
externals.forEach(dep => b.external(dep));

// run the bundle and output to the console
function bundle() {
  b.bundle().pipe(fs.createWriteStream(out));
}
bundle();

// if we are in watching mode, tell when we're done
if (shouldWatch) {
  b.on('update', bundle);
  b.on('bytes', bytes => console.log(`${bytes} bytes written`));
}
