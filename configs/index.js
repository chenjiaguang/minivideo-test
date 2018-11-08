const env = 'test'


let commonConfig = require('common.env.js')
let config = {}
if (env == 'prod') {
  config = require('prod.env.js')
} else if (env == 'test') {
  config = require('test.env.js')
} else {
  config = require('dev.env.js')
}

module.exports = Object.assign({}, commonConfig, config)