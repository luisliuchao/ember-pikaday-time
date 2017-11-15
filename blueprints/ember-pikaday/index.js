module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonToProject('ember-cli-moment-shim', '^3.5.0');
  }
};
