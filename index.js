/* eslint-env node */
'use strict';
var fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-pikaday',
  options: {
    nodeAssets: {
      'pikaday-time': function() {
        return {
          enabled: process.env.EMBER_CLI_FASTBOOT !== 'true',
          vendor: {
            include: ['pikaday.js', 'css/pikaday.css']
          }
        }
      }
    }
  },
  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/pikaday/pikaday.js');
    this.import('vendor/pikaday/css/pikaday.css');
  }
};
