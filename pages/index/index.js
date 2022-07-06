Page({
  data: {
    src: '../images/branch.svg'
  },
  nextPage(){
    my.navigateTo({
      url: '../menu/menu'
    })
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onTitleClick() {
    // 标题被点击
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  }
});  
