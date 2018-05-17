const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

let dataStore;

exports.handler = async (event) => {
    console.log("markolsen" + JSON.stringify(event));
   if (event.context['http-method'] === 'DELETE') {
      dataStore = undefined;
   } else if (event.context['http-method'] === 'GET') {
      dataStore = event.params.querystring;
   } else if (event.context['http-method'] === 'POST') {
      dataStore = event['body-json'];
   } else if (event.context['http-method'] === 'PUT') {
      dataStore = "omg";
   }
   return { event, dataStore };
};
