import { SIGN_IN } from "../const/index";

const initialState = {
  username: '',
  password: '',
}

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      // const checkUser = state.findIndex( (register) => register.username === action.username );
      state = { username: action.username, password: action.password };
      return state;

    default:
      return state;
  }
};

export default loginReducers;
