Package.describe({
  name: 'taehee:rand-token',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Generate random tokens from your choice of randomness.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('rand-token.js');
  api.export('RandToken', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('taehee:rand-token');
  api.addFiles('rand-token-tests.js');
});

Npm.depends({ 'rand-token': '0.2.1' });