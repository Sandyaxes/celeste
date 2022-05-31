// export const GET_MENU = "GET_MENU";

export const getMenu = ()=> {
  try {
    return async dispatch => {
      const result = await  my.request({
      url: 'http://localhost:3000/menu',
      method: 'GET',
      dataType: 'json',
    })
  .then(data => {
    dispatch({
      type: "GET_MENU",
      payload: data
    })
    console.log(data)
  });
  // if(result){
  //   dispatch({
  //     type: "GET_MENU",
  //     payload: result
  //   });
  // }else{
  //   console.log('Unable to get data!')
  // }
    }
  } catch (error) {
    console,log(error)
  }
}