let getMenu = () => {
  return my.request({
    url: "https://celeste-sandile.herokuapp.com/menu",
    method: "GET"
  });
};

const menu = getMenu();

export function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/decremented":
      return { count: state.count ? state.count - 1 : 0 };
    case "counter/incremented":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export function menuReducer(state = { value: menu }, action) {
  switch (action.type) {
    case "GET_MENU":
      return { ...state, value: state.value };
    case "GET_USER":
      return { ...state, user: action.payload };
    case "GET_TOKEN":
      return { ...state, token: action.payload };
    default:
      state;
  }
}
