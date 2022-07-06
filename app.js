import { getAuthCode } from "./services/services/authentication";
import { menuStore } from "/redux/store";

App({
  async onLaunch(options) {
    // 第一次打开
    options.query == { number: 1 };
    console.info("App onLaunch");
    const authCode = await getAuthCode();

    const requestUser = await my.request({
      url: "https://celeste-sandile.herokuapp.com/auth",
      method: "POST",
      dataType: "json",
      data: { authCode }
    });

    menuStore.dispatch({ type: "GET_USER", payload: requestUser.data.user });
    menuStore.dispatch({ type: "GET_TOKEN", payload: requestUser.data.token });
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  }
});
