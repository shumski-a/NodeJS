// requires
const _ = require('lodash');


const config = require('./config.json'); //Simple include config 
const defaultConfig = config.dev;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

// all global variables should be referenced via global. syntax
global.gConfig = finalConfig;

// log global.gConfig
console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);