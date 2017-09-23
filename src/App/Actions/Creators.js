import createAction from './CreateAction';
import Types from './Types';

const startup = () =>
  createAction(Types.STARTUP);
const toggleMessage = (message) =>
  createAction(Types.TOGGLE_MESSAGE, {message});
const setAppProps = (data) =>
  createAction(Types.SET_APP_PROPS, {data});

const signIn = (data) =>
  createAction(Types.SIGN_IN, {data});
const signInSuccess = (response) =>
  createAction(Types.SIGN_IN_SUCCESS, {response});
const signInFailure = (response) =>
  createAction(Types.SIGN_IN_FAILURE, {response});

const signOut = () =>
  createAction(Types.SIGN_OUT);
const signUp = (data) =>
  createAction(Types.SIGN_UP, {data});
const signUpSuccess = (response) =>
  createAction(Types.SIGN_UP_SUCCESS, {response});
const signUpFailure = (response) =>
  createAction(Types.SIGN_UP_FAILURE, {response});

const getUser = (data) =>
  createAction(Types.GET_USE);
const editUser = (data) =>
  createAction(Types.EDIT_USER, {data});

const changePassword = (data) =>
  createAction(Types.CHANGE_PASSWORD, {data});
const updateUserSuccess = (response) =>
  createAction(Types.UPDATE_USER_SUCCESS, {response});
const updateUserFailure = (response) =>
  createAction(Types.UPDATE_USER_FAILURE, {response});

const navigate = (route) =>
  createAction(Types.NAVIGATE, {route});

export default {
  startup,
  toggleMessage,
  setAppProps,
  signOut,
  signUp,
  signUpSuccess,
  signUpFailure,

  signIn,
  signInSuccess,
  signInFailure,

  getUser,
  editUser,
  changePassword,
  updateUserFailure,
  updateUserSuccess,
};
