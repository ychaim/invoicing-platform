'use strict';

// imports
const AWS = require('aws-sdk');

// local imports
const s3Client = require('../lib/s3-client');

const kms = new AWS.KMS();

exports.initEnvVar = (context, env_name, var_name) => {
    const value = process.env[env_name] || '';
    console.log(`initEnvVar env_name=${env_name}, var_name=${var_name}, value=${value}`);
    kms.decrypt({ CiphertextBlob: Buffer.from(value, 'base64') })
        .promise()
        .then(data => {
            context[var_name] = String(data.Plaintext);
            console.error(`SET ${var_name} ==> ${context[var_name]}`);
            s3Client.init();
        })
        .catch(err => {
            console.error(`FAILED TO DECRYPT ${env_name}`);
            console.error(err);
        });
};