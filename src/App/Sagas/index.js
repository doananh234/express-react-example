import { takeLatest, all, fork } from 'redux-saga/effects';
import Types from '../Actions/Types';

import { startup, getRoomType } from './StartupSaga';
import {
  signIn,
	signUp,
  signOut,
  fbSignIn,
  googleSignIn,
  getUser,
  editUser,
  changePassword
} from './LoginSaga';
export default function * root () {
  yield all([
    takeLatest(Types.STARTUP, startup),
    takeLatest(Types.SIGN_IN, signIn),
    takeLatest(Types.SIGN_UP, signUp),
    takeLatest(Types.SIGN_OUT, signOut)
  ])
}
