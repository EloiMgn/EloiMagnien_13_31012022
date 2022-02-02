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

    if (state.userConnected === true) {
      // On ne peut pas se connecté si on est déjà connecté
      return state;
    } else {
      return { ...state, userConnected: true };
    }
  }
  return state;
}

export const store = createStore(reducer);