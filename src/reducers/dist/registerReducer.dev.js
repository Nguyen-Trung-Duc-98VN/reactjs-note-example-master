"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../const/index");

var initialState = {
  list: []
};

var registerReducer = function registerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _index.ADD_NEW_USER:
      {
        console.log(action.payload.username + " " + action.payload.password); // state = [...state, { username: action.payload.username, password: action.payload.password }];

        console.log(state);
        return state;
      }

    case _index.EDIT_USER:
      {
        return state;
      }

    case _index.REMOVE_USER:
      {
        var userRemove = action.payload.username;
        state = state.filter(function (user) {
          if (user.username === userRemove) return false;
          return true;
        });
        return state;
      }

    default:
      return state;
  }
};

var _default = registerReducer;
exports["default"] = _default;