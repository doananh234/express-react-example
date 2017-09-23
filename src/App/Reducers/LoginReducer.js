import Types from '../Actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';
export const INITIAL_STATE = Immutable({
  data: {},
  error: null,
  isLogged: false,
  isLogin: false,
  signInType: null,
  token: null,
});

const startUp = (state, action) => {
  return state.merge({
    isLogin: false
  });
}

const signUp = (state, action) => {
  return state.merge({
    error: null,
    signInType: null,
    fbToken: null,
    isLogin: true,
    googleToken: null,
    emailToken: null
  });
}

const signUpSuccess = (state, action) =>
  state.merge({
    isLogged: true,
    isLogin: false,
    signInType: Types.SIGN_IN,
    token: action.token

  });

const signUpFailure = (state, action) =>
  state.merge({
    isLogged: false,
    isLogin: false,
    error: action.response.message,
    editing: false,
  });

const signIn = (state, action) => {
  return state.merge({
    error: null,
    signInType: null,
    fbToken: null,
    isLogin: true,
    isLogged: false,
    token: null
  });
}

const signInSuccess = (state, action) =>
  state.merge({
    isLogged: true,
    isLogin: false,
    signInType: Types.SIGN_IN,
    token: action.response.token

  });

const signInFailure = (state, action) =>
  state.merge({
    isLogged: false,
    isLogin: false,
    error: action.response.message,
    editing: false,
  });

const googleSignIn = (state, action) => {
  return state.merge({
    error: null,
    signInType: null,
    fbToken: null,
    isLogin: true,
    isLogged: false,
    token: null,
  });
}

const googleSignInSuccess = (state, action) =>
  state.merge({
    isLogged: true,
    isLogin: false,
    signInType: Types.GOOGLE_LOGIN,
    token: action.token

  });

const googleSignInFailure = (state, action) =>
  state.merge({
    isLogged: false,
    isLogin: false,
    error: action.response.message,
    editing: false,
    token: null
  });

const fbSignIn = (state, action) => {
  return state.merge({
    isLogin: true,
    error: null,
    isLogged: false,
    token: null
  });
}

const fbSignInSuccess = (state, action) => {
  return state.merge({
    data: {...state.data, ...action.response},
    isLogged: true,
    isLogin: false,
    signInType: Types.FB_LOGIN,
    token: action.token,
  });
}
const fbSignInFailure = (state, action) =>
  state.merge({
    isLogged: false,
    error: action.error,
    isLogin: false,
    token: null
  });

const signOut = (state, action) => {
  return state.merge({
    error: null,
    signInType: null,
    fbToken: null,
    isLogged: false,
    isLogin: false,
    token: null
  });
}

const getUser = (state, action) => {
  return state.merge({
  error: null,
  isFetching: true
  });
}

const editUser = (state, action) => {
  return state.merge({
  data: {...state.data,...action.data},
  error: null,
  isFetching: true
  });
}


const changePassword = (state, action) => {
  return state.merge({
    error: null,
    isFetching: true
  });
}

const updateUserSuccess = (state, action) =>{
  return state.merge({
  data: {...state.data, ...action.response},
  error: null,
  isFetching: false
});
}

const updateUserFailure = (state, action) =>
  state.merge({
  error: action.response.message,
  isFetching: false,
  });

const ACTION_HANDLERS = {
  [Types.STARTUP]: startUp,
  [Types.SIGN_OUT]: signOut,
  [Types.SIGN_UP]: signUp,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP_FAILURE]: signUpFailure,
  [Types.SIGN_IN]: signIn,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,
  [Types.GOOGLE_LOGIN]: googleSignIn,
  [Types.GOOGLE_LOGIN_SUCCESS]: googleSignInSuccess,
  [Types.GOOGLE_LOGIN_FAILURE]: googleSignInFailure,
  [Types.FB_LOGIN]: fbSignIn,
  [Types.FB_LOGIN_SUCCESS]: fbSignInSuccess,
  [Types.FB_LOGIN_FAILURE]: fbSignInFailure,
  [Types.GET_USE]: getUser,
  [Types.EDIT_USER]: editUser,
  [Types.CHANGE_PASSWORD]: changePassword,
  [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [Types.UPDATE_USER_FAILURE]: updateUserFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
