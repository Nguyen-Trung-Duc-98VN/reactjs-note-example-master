import { SIGN_IN } from '../const/index';

export const actSignIn = (username, password) => {
    return {
      type: SIGN_IN,
      // payload: { username, password },
      username,
      password,
    };
  };
  