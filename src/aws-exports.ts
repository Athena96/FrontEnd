// src/aws-exports.js
const awsconfig = {
    Auth: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_AA5yTAvmw',
      userPoolWebClientId: '3pipop8gkjj6vcrud7k8nj66fq',
    },
    API: {
        endpoints: [
            {
                name: "Endpoint", // name of the API in API Gateway console
                endpoint: "https://8351pwpo0k.execute-api.us-east-1.amazonaws.com/prod",
                region: "us-east-1",
                paths: ['/']
            }
        ]
    }
  };
  
  export default awsconfig;