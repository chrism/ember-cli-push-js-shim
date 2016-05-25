/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-push-js-shim',
  included: function included(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/push.js/push.min.js');
    app.import('vendor/ember-cli-push-js-shim.js');
  }
};