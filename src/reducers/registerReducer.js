import { ADD_NEW_USER, EDIT_USER, REMOVE_USER } from '../const/index';

const initialState = {
  list: [],
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:{

      // return {
      //   ...state,
      //   list: [...state.list, {
      //     username: action.payload.username,
      //     password: action.payload.password,
      //   }]
      // };
      // state = [...state, { username: action.username, password: action.password }];
      // return state;
      const newList = [...state.list];
      newList.push(action.payload);
      
      return {
        ...state,
        list: newList,
      }
    }
    
    case EDIT_USER:{
      return state;
    }

    case REMOVE_USER:{
      // const userRemove = action.payload.username;
      // state = state.filter(user => {
      //   if (user.username === userRemove) 
      //     return false;
      //   return true;
      // })
      return state;
    }

    default:
      return state;
  }
};

export default registerReducer;
