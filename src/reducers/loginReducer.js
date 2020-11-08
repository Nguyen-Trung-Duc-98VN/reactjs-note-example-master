

//Import các const
import { SIGN_IN } from "../const/index";

const initialState = {
  username: '',
  password: '',
}

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:

      return state;

    default:
      return state;
  }
};

export default loginReducers;
