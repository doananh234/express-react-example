import { take, call, put, select } from 'redux-saga/effects';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import config, {ErrorCode} from '../Config/AppSetting';
import Tools from '../Services/Tools';
import Api from '../Services/ParseApi';
import {push} from 'react-router-redux';

export function * signOut({data}) {
  yield put(putRouter('/'));
}

export function * signUp({data}) {
  try {
    const ParseApi = new Api(null);
    const response = yield call([ParseApi, ParseApi.signUp], data);

    if (response && !response.success) {
      yield put(Actions.signUpFailure(response));
      yield put(Actions.toggleMessage(response.message));
      return;
    }
    else
      yield put(Actions.signInSuccess({...response}));
      yield put(Actions.getUser());
      yield put(push('/home'));
  } catch (err) {
    console.log(err)
    yield put(Actions.signUpFailure(err));
    yield put(Actions.toggleMessage(response.message));
  }
}

export function * signIn({data}) {
  try {
    const {history} = yield select((state) => state.app);
    return;
    const ParseApi = new Api(null);
    const response = yield call([ParseApi, ParseApi.signIn], data);
    if (response && !response.success) {
      yield put(Actions.signInFailure(response));
      yield put(Actions.toggleMessage(response.message));
      return;
    }
    else {
        yield put(Actions.signInSuccess({...response}));
        yield put(Actions.getUser());
        yield put(push('/home'));
    }
  } catch (err) {
    console.log(err)
    yield put(Actions.signInFailure(err));
    yield put(Actions.toggleMessage(response.message));
  }
}

export function * googleSignIn() {
  try {
    const ParseApi = new Api(null);
    const response = yield call([ParseApi, ParseApi.googleSignIn]);
    console.log(response)
    if (response && !response.success) {
      yield put(Actions.googleLoginFailure(response));
      yield put(Actions.toggleMessage(response.message));
      return;
    }
    else
      yield put(Actions.googleLoginSuccess(response.token));
      yield put(Actions.getUser());
      yield put(push('/home'));
  } catch (err) {
    yield put(Actions.googleLoginFailure(err));
    yield put(Actions.toggleMessage(response.message));
  }
}

export function * fbSignIn() {
  try {
    const ParseApi = new Api(null);
    const response = yield call([ParseApi, ParseApi.facebookSignIn]);
    if (response && !response.success) {
      yield put(Actions.fbSignInFailure(response));
      yield put(Actions.toggleMessage(response.message));
      return;
    }
    else
      yield put(Actions.fbSignInSuccess(response.token));
      yield put(Actions.getUser());
      yield put(putRouter('/home'));
  } catch (err) {
    console.log(err)
    yield put(Actions.fbSignInFailure(err));
    yield put(Actions.toggleMessage(response.message));
  }
}

export function * getUser({data}) {
  try {
    const {token} = yield select((state) => state.login);
    const ParseApi = new Api(token);
    const response = yield call([ParseApi, ParseApi.getUser]);

    if (!response) {
      yield put(Actions.updateUserFailure(response));
      yield put(Actions.toggleMessage(response.message));
      return;
    }
    else
      yield put(Actions.updateUserSuccess(response));
  } catch (err) {
    console.log(err)
    yield put(Actions.updateUserFailure(err));
    yield put(Actions.toggleMessage(response.message));
  }
}

export function * editUser({data}) {
  try {
    console.log(data)
    const {token} = yield select((state) => state.login);
    const ParseApi = new Api(token);
    const response = yield call([ParseApi, ParseApi.updateUser], data);

      console.log(response)
    if (!response || !response.success) {
      yield put(Actions.updateUserFailure(response));
      yield put(Actions.toggleMessage(response.message));
      return;
    }
    else
      yield put(Actions.fbSignInSuccess(response.user.token));
      yield put(Actions.updateUserSuccess(response.user));
  } catch (err) {
    console.log(err)
    yield put(Actions.updateUserFailure(err));
    yield put(Actions.toggleMessage(response.message));
  }
}

export function * changePassword({data}) {
  try {
    const {token} = yield select((state) => state.login);
    const ParseApi = new Api(token);
    const response = yield call([ParseApi, ParseApi.changePassword], data);

    if (!response || !response.success) {
      yield put(Actions.updateUserFailure(response));
      yield put(Actions.toggleMessage(response.message));
      return;
    }
    else
      yield put(Actions.fbSignInSuccess(response.user.token));
      yield put(Actions.updateUserSuccess(response.user));
  } catch (err) {
    console.log(err)
    yield put(Actions.updateUserFailure(err));
    yield put(Actions.toggleMessage(response.message));
  }
}
