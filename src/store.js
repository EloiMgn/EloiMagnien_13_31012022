import { createStore } from "redux";


// state
// const initialState = {
//   player1: 0,
//   player2: 0,
//   advantage: null,
//   winner: null,
//   playing: true,
// };

const initialState = {
  userConnected: false,
  userFirstname: '',
  userLastname: '',
  token: '',
};

// actions creators


function reducer(state = initialState, action) {
  if (action.type === "logout") {
    return initialState;
  }

  if (action.type === "login") {

    // On ne peut pas se connecter si on est déjà connecté
    if (state.userConnected === false) {
      return { ...state, userConnected: true, token: `${action.token}` };
    } else {
      return state
    }
  }
  return state;
}

export const store = createStore(reducer);