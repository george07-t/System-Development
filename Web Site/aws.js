// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
var awsIot = require('aws-iot-device-sdk');

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts
// to connect with a client identifier which is already in use, the existing
// connection will be terminated.
//
var device = awsIot.device({
   keyPath: 'ea333d6bd2074529f4f00ca18f7025ba1a94fa9f6681ef3fe511946c3a37f0ae-private.pem.key',
  certPath: 'ea333d6bd2074529f4f00ca18f7025ba1a94fa9f6681ef3fe511946c3a37f0ae-certificate.pem.crt',
    caPath: 'AmazonRootCA1.pem',
  clientId: 'esp32_1',
      host: 'a23n65lh6qp9r0-ats.iot.ap-south-1.amazonaws.com'
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device
  .on('connect', function() {
    console.log('connect');
    device.publish('*', JSON.stringify({ test_data_from_local: 1}));
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });