import { store } from "/redux/store";
import { menuStore } from "/redux/store";

Page({
  data: {
    inputValue: 0,
    cost: 0,
  },
  bindButtonTap() {
    this.setData({
      focus: true
    });
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  onLoad() {
    let counter = store.getState().count;
    let initialAmount = 100 * counter;
    let cost = initialAmount;
    this.setData({ counter });
    this.setData({ initialAmount });
    this.setData({ cost });
  },

  calcTip(percent, custTip) {
    this.setData({ customer: false});
    let counter = store.getState().count;
    let initialAmount = 100 * counter;
    let inputValue = (initialAmount * percent) / 100;
    let cost = initialAmount + inputValue + custTip;
    this.setData({ inputValue });
    this.setData({ cost });
  },
  activeButton(value){
    switch(value){
      case "active_1":
       this.setData({ active_1: true, active_2:false,active_3:false,active_4:false});
       break;
      case "active_2":
       this.setData({ active_2: true, active_1:false,active_3:false,active_4:false}); 
       break;
      case "active_3":
       this.setData({ active_3: true, active_1:false,active_2:false,active_4:false});; 
       break;
      case "active_4":
       this.setData({ active_4: true, active_1:false,active_2:false,active_3:false});
    }

    
  },
  tenPercent() {
    this.calcTip(10, 0);
    this.activeButton("active_1");
  },
  fifteenPercent() {
    this.calcTip(15, 0);
    this.activeButton("active_2");
  },
  twentyPercent() {
    this.calcTip(20, 0);
    this.activeButton("active_3");
  },
  customerTip(e) {
    let inputValue = parseInt(e.detail.value);
    this.calcTip(0, inputValue);
    this.setData({ inputValue });
    this.customerActive(); 
    
  },
  customerActive() {
    this.activeButton("active_4");
    this.setData({ customer: true });
  },
  pay() {
    const token = menuStore.getState().token;
    const userId = menuStore.getState().user.userId;

    my.request({
      url: "https://celeste-sandile.herokuapp.com/menu",
      method: "GET",
      data: {
        People: this.data.counter,
        tip: this.data.inputValue,
        Cost: this.data.cost
      }
    });

    my.request({
      url: "https://celeste-sandile.herokuapp.com/payment",
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      data: {
        userId: userId,
        paymentRecord: this.data
      },
      success: res => {
        my.tradePay({
          paymentUrl: res.data.redirectActionForm.redirectUrl,
          success: res => {
            if (res.resultCode === "9000") {
              my.alert({
                content: (res.resultCode = "Payment Successful.")
              });

              my.redirectTo({
                url: "../endPage/endPage"
              });
            } else {
              my.alert({
                content: (res.resultCode = "Payment Failed. Please Try Again.")
              });
            }
          }
        });
      },
      fail: res => {
        my.alert({
          content: JSON.stringify(res)
        });
      }
    });
  }
});
