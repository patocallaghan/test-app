/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  const commitSHA = 'd995c68f78ea57dc15786170a22e464456476b9e';
  ENV.sentry = {
    // the URL or CDN your js assets are served from
    publicUrl: 'https://localhost:4200',
    // the sentry install you're using, https://sentry.io for hosted accounts
    sentryUrl: 'https://sentry.io',
    sentryOrganizationSlug: 'patocallaghan',
    sentryProjectSlug: 'test-app',
    
    sentryBearerApiKey: process.env.SENTRY_TOKEN,
    revisionKey: commitSHA,
    revisionCommits: function() {
      return [{
        repository: "patocallaghan/test-app",
        commit: commitSHA
      }];
    }
  }

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
