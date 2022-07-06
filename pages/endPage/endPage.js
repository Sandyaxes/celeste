import { menuStore } from "/redux/store";
Page({
  data: {},
  onLoad() {
    let name = menuStore.getState().user.UserName;
    let email = menuStore.getState().user.Email;
    let table = Math.floor(Math.random() * 999);
    this.setData({ name, email, table });
  },
  toHome() {
    my.reLaunch({
      url: "../index/index"
    });
  }
});
