/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-pikaday',
  options: {
    nodeAssets: {
      'pikaday-time': function() {
        return {
          enabled: process.env.EMBER_CLI_FASTBOOT !== 'true',
          vendor: {
            include: ['pikaday.js', 'css/pikaday.css', 'css/theme.css']
          }
        }
      }
    }
  }
};
