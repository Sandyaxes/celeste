Page({

  async GetAuthCode(){
    const clientId = "2020122325111778413994";
    const userId = "21661000000446291765";

    const options = {
      method: 'POST',
      url: 'http://localhost:3000/auth/v2/authorizations/applyAuthCode',
      headers: {
        'Content-Type': 'application/json',
        'client-id': clientId,
        'request-time': '2021-02-22T17:49:26.913+08:00',
        'signature': 'algorithm=RSA256, keyVersion=1, signature=testing_signatur',
        'SOFA-TraceId': '20210224000010086009',
        'SOFA-RpcId': '0'
      },
      data: {
        clientId,
        userId,
        scopes: 'auth_user'
      }
    };
    const response = await my.request(options);
    my.alert({
      title: 'Authenticated',
      content: response.data.authCode
    });

    return response.data.authCode;
  },
});
