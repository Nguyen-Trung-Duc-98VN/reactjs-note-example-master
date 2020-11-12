import { ADD_NEW_USER, EDIT_USER, REMOVE_USER } from '../const/index';

const initialState = {
  list: [],
  cache: { username: "", password: "" },
  check: false,
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:{
        const newList = [...state.list];
        newList.push(action.payload);
        
        return {
          ...state,
          list: newList,
        }
    }
    case SIGN_IN:{
        // const checkUser = state.findIndex( (register) => register.username === action.username );
        const listUser = state.list;
        const lengthListUser = listUser.length;
        state.url='/page-home';
  
        // if( lengthListUser !== 0 ){
        //     for (let index = 0; index < lengthListUser; index++) {
        //         const account = listUser[ index ];
        //         if( account.username === username && account.password === password ){
        //             dispatch( actSignIn( username, password ) );
        //             state.url='/page-home';
        //         }else{
        //             if( index !== lengthListUser -1 ){
        //                 continue;
        //             }
        //             console.log("Error");
        //         }
        //     }
        // }else{
        //     console.log("Error");
        // }
        console.log(state);
        onst newList = [...state.list];
        newList.push(action.payload);
        
        return {
            ...state,
            list: newList,
            url: newURL,
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
