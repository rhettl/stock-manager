/* eslint-env node */
'use strict';

const awsConfig = require('../aws-config.json');

module.exports = function(deployTarget) {
  let ENV = {
    build: {},
    // include other plugin configuration that applies to all deploy targets here

    s3: {
      accessKeyId: awsConfig.accessKey,
      secretAccessKey: awsConfig.secretKey,
      bucket: 'stock-report.rhettl.com',
      region: 'us-west-2'
    },
    's3-index': {
      accessKeyId: awsConfig.accessKey,
      secretAccessKey: awsConfig.secretKey,
      bucket: 'stock-report.rhettl.com',
      region: 'us-west-2'
    },
    pipeline: {
      activateOnDeploy: true
    }
  };

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
