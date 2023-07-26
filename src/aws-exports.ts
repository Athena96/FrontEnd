// src/aws-exports.js
const awsconfig = {
    Auth: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_1vph21DjX',
      userPoolWebClientId: '4frfkri1535dldem3bh3bgfvue',
    },
    API: {
        endpoints: [
            {
                name: "Endpoint", // name of the API in API Gateway console
                endpoint: "https://i1x4l94mh0.execute-api.us-east-1.amazonaws.com/prod",
                region: "us-east-1",
                paths: ['/']
            }
        ]
    }
  };
  
  export default awsconfig;