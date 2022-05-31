const request = async (url, headers, data, method) => {

  return my.request({
    url: url,
    headers: {
      ...headers
    },
    method: method,
    data: data,
    timeout: 30000
  });
};

export default {
  request
};
