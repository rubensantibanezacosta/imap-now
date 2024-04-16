
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./imap-now.cjs.production.min.js')
} else {
  module.exports = require('./imap-now.cjs.development.js')
}
