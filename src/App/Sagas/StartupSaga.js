import { put, call, select } from 'redux-saga/effects';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import I18n, {TRANSLATIONS} from '../I18n/I18n.js';
import Api from '../Services/ParseApi';
import moment from 'moment';
import { ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
// process STARTUP actions
export function * startup (action) {
    const { isLogged, data, token } = yield select((state) => state.login);
    console.log(token)
    if (token) {
      yield put(push('/login'));
    } else {
      yield put(push('/home'));
    }
}
