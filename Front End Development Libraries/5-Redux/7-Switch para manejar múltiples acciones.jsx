const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Cambia el código debajo de esta línea
  switch (action.type) {
    case 'LOGIN':
      return {authenticated: true};
    case 'LOGOUT':
      return {authenticated: false};
  
    default:
      return state
  }
  // Cambia el código encima de esta línea
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};