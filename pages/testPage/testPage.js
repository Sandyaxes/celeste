Page({
  data: {},
  onLoad() {
   my.request({
      url: 'http://localhost:3000/launch',
      method: 'GET',
      dataType: 'json',
    })
  .then(data => console.log(data));
    
  
  // console.log(res)


  },
});
