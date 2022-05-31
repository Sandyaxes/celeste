import {menuStore} from '/redux/store';

Page({
  data: {
    counter: 0,
    images: {
        leftLeaf: '../images/left-leaf.svg',
        rightLeaf: '../images/right-leaf.svg',
      },
    menu: []
  },
  async onLoad() {
    menuStore.dispatch({ type: "GET_MENU" })
    let dataObj = await menuStore.getState().value;
    let menu = dataObj.data
    this.setData({menu});
  },
});

