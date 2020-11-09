import { SIGN_IN } from "../const/index";

// const initialState = {
//   username: '',
//   password: '',
// }

const loginReducers = (state = [], action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log(state);
      const checkUser = state.register.findIndex( (register) => register.username === action.username );
      console.log()
      console.log(checkUser);
      console.log(state.register["0"].password);
      if ( checkUser !== -1 && state[checkUser].password == action.password )
        console.log('login OK');
    
      return state;

    default:
      return state;
  }
};

export default loginReducers;
