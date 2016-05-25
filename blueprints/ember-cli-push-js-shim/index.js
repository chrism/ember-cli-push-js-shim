module.exports = {
  description: 'Installation blueprint for ember-cli-push-js-shim',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('push.js', '0.0.7');
  }
};
