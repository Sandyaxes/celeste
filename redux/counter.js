let getMenu = ()=>{
  return my.request({
      url: 'http://localhost:3000/menu',
      method: 'GET',
    })
} 

const menu = getMenu();

export function counterReducer(state = { value: 0}, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

export function menuReducer(state = {value: menu}, action){
  switch(action.type){
    case "GET_MENU":
      return {value: state.value}
    default: state
  }
}
