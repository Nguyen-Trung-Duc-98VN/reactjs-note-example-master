import { ADD_NEW_USER, EDIT_USER, REMOVE_USER } from '../const/index';

export const actAddUser = ( username, password ) => {
    return {
        type: ADD_NEW_USER,
        // payload: { username, password },
        username,
        password,
    };
};

export const actEditUser = ( username, password ) => {
    return {
        type: EDIT_USER,
        // payload: { username, password },
        username,
        password,
    };
};

export const actRemoveUser = ( username ) => {
    return {
        type: REMOVE_USER,
        // payload: { username },
        username,
    };
};
  