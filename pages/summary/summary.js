import {store} from '/redux/store'
Page({
  data: {
    focus: false,
    inputValue: 0,
    cost: 0,
    customer: false
  },
  bindButtonTap() {
    this.setData({
      focus: true,
    });
  },
  bindKeyInput(e) { 
    this.setData({
      inputValue: e.detail.value,
    });

  },
  onLoad() {
    let counter = store.getState().value;
    let initialAmount = 100 * counter;
    let cost = initialAmount;
    this.setData({counter});
    this.setData({initialAmount});
    this.setData({cost});
},
tenPercent(){
      let counter = store.getState().value;
      let initialAmount = 100 * counter;
      let inputValue = initialAmount * 0.1;
      let cost = initialAmount + inputValue;
      this.setData({inputValue});
      this.setData({cost});
},
fifteenPercent(){
      let counter = store.getState().value;
      let initialAmount = 100 * counter;
      let inputValue = initialAmount * 0.15;
      let cost = initialAmount + inputValue;
      this.setData({inputValue});
      this.setData({cost});
},
twentyPercent(){
      let counter = store.getState().value;
      let initialAmount = 100 * counter;
      let inputValue = initialAmount * 0.2;
      let cost = initialAmount + inputValue;
      this.setData({inputValue});
      this.setData({cost});
},
customerTip(){
    this.setData({customer: true})
    let counter = store.getState().value;
    let cost = 100 * counter;
    if(this.data.inputValue < 0){
      return 0;
    }
    cost = cost + parseInt(this.data.inputValue);
    this.setData({cost});
},
nextpage(){
    my.request({
  url: 'http://localhost:3000/menu',
  method: 'POST',
  data: {
    People: this.data.counter,
    tip: this.data.inputValue,
    Cost: this.data.cost,
  }
  }),
  my.navigateTo({
    url: "../endPage/endPage"
  })
}
});

