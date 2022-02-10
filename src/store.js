import { createStore } from "redux";
import produce from 'immer';

const initialState = {
  userConnected: false,
  userFirstname: '',
  userLastname: '',
  token: '',
  remerberUser: false
};

function reducer(state = initialState, action) {
  if (action.type === "logout") {
    return initialState;
  }

  if (action.type === "login") {
    // On ne peut pas se connecter si on est déjà connecté
    if (state.userConnected === false) {
      return { ...state, 
        userConnected: true, 
        remerberUser: action.rememberUser,
        token: `${action.token}` };
    } else {
      return state
    }
  }

  if (action.type === "setUsername") {
    return produce (state, (draft) => {
      draft.userFirstname = action.firstName
      draft.userLastname = action.lastName
    })
  }
  return state;
}

export const store = createStore(reducer);