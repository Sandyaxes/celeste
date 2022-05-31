import {store} from '/redux/store'
// const {store} = require('/redux/store')

Component({
  mixins: [],
  data: {
    money: 100,
    counter: 0,
  },
  props: {
    onRun(){
    },
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    
    increment(){
      store.dispatch({ type: 'counter/incremented' });
      let counter = store.getState().value;
      this.setData({counter});
    },
    decrement(){
     store.dispatch({ type: 'counter/decremented' })
     let counter = store.getState().value;
     this.setData({counter});
    },
    addToOrder(){
      my.navigateTo({
      url: '../summary/summary' 
    });
    }
  },
});
