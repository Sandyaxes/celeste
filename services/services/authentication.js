import { request } from './request';

// const { CLIENT_ID, isDevice, authScopes, userId } = app.data;
const BASE_URL = 'localhost:3000' // Your api's domain
const CLIENT_ID =  '2020122653946739963336' // the client id you are using on your backend
const isDevice = process.env.NODE_ENV !== 'development' // checks if running on device or in simulator
const userId = '216610000000446291765' // use the id in the postman collection environment i sent
const authScopes = ['auth_user']

// my.getAuthCode can only run when on device. We run this piece of code when isDevice is true
const getTokenFromJSAPI = async () => {
  return new Promise((resolve, reject) => {
    my.getAuthCode({
      scopes: authScopes,
      success: (result) => {
        return resolve(result.authCode);
      },
      fail: (result) => {
        my.alert({
          content: "To give you the best possible experience we'll need permission to view your personal details. Visit our privacy policy to learn more."
        });
        return reject(result);
      }
    });
  });
};


//when isDevice is false we run this to simulate getting an auth Code. This allows us to get an auth code when in simulator
const getTokenFromTestEnv = async () => {
  const method = 'POST';
  const headers = {
    'Content-Type': 'application/json',
    'client-id': CLIENT_ID,
    'request-time': '2021-02-22T17:49:26.913+08:00',
    signature: 'algorithm=RSA256, keyVersion=1, signature=testing_signatur'
  };
  const url = 'https://vodapay-gateway.sandbox.vfs.africa/v2/authorizations/applyAuthCode';
  const data = {
    clientId: CLIENT_ID,
    userId: userId,
    scopes: authScopes.join()
  };
  const response = await request(url, headers, data, method);

  return response.data.authCode;
};


// import and runthis function to get an auth code in your mini app
export const getAuthCode = async () => {
  if (isDevice) {
    return getTokenFromJSAPI();
  }

  return getTokenFromTestEnv();
};