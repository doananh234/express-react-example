import config, {timeoutDef} from '../Config/AppSetting';
import _ from 'lodash';
import Tools from './Tools';
import moment from 'moment';
export default class Parse {

  constructor(token) {
    if (!_.isNull(token) && _.isUndefined(token)) {
      throw 'TokenMissing';
    }
    this._sessionToken =
      _.isNull(token) ?  null : token;

    // this._applicationId = config.PARSE_ID;
    // this._restAPIKey = config.PARSE_API_KEY;
    // this._masterKey = null;

    this.API_BASE_URL=  config.URL;
  }


  getNearbyLocation(latitude, longitude) {
    return fetch({
      method: 'GET',
      timeout: 10000,
      url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken&location='+latitude+','+longitude+'&rankby=distance&key=AIzaSyB7CHUBsexTJWKPVXIP2dIRd0J9J-voqjM'
      // url: 'https://maps.googleapis.com/maps/api/place/radarsearch/json?rankby=distance&location='+latitude+','+longitude+'&radius=5000&type=service&key='+config.GOOGLE_PLACE_KEY,

    }).then(response => response.json());
  }

  getGeocode (address) {
    return fetch({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+address
      // url: 'https://maps.googleapis.com/maps/api/place/radarsearch/json?rankby=distance&location='+latitude+','+longitude+'&radius=5000&type=service&key='+config.GOOGLE_PLACE_KEY,

    }).then(response => response.json());
  }


  payment () {
    return this._fetch({
      method: 'GET',
      url: '/payment/client_token',
      timeout: 10000
      // url: 'https://maps.googleapis.com/maps/api/place/radarsearch/json?rankby=distance&location='+latitude+','+longitude+'&radius=5000&type=service&key='+config.GOOGLE_PLACE_KEY,

    }).then(response => response.json());
  }

  checkout(paymentMethodNonce, amount) {
    return this._fetch({
      method: 'POST',
      url: '/payment/checkout',
      body: {
          payment_method_nonce: paymentMethodNonce,
          amount: amount
        },
      timeout: 10000
    }).then(response => response.json());
  }

  updatePaymentMenthod(paymentMethodNonce) {
    return this._fetch({
      method: 'PUT',
      url: '/user/me/payment-method',
      body: {
          payment_method_nonce: paymentMethodNonce
        },
      timeout: 10000
    }).then(response => response.json());
  }

  changePassword(data) {
    return this._fetch({
      method: 'PUT',
      url: '/user/me/password',
      body: data,
      timeout: 10000
    }).then(response => response.json());
  }


    forgetPassword (email) {
        return this._fetch({
          method: 'POST',
          url: '/user/me/forgotPassword',
          body: {
            email: email
          }
        }).then(response => response.json());
    }

    checkVerifyCode ( code) {
        return this._fetch({
          method: 'POST',
          url: '/user/me/checkVerifyCode',
          body: {
            verify_code: code
          }
        }).then(response => response.json());
    }


    newPassword (email, code, password) {
        return this._fetch({
          method: 'POST',
          url: '/user/me/newPassword',
          body: {
            email: email,
            verify_code: code,
            password: password
          }
        }).then(response => response.json());
    }

  getDriveTime (currentLocation, result) {
    let url = 'http://maps.googleapis.com/maps/api/distancematrix/json?origins=' + currentLocation.latitude + ',' + currentLocation.longitude + '&destinations=' + result.latitude + ',' + result.longitude + '&sensor=false&mode=driving';

    return fetch({
      method: 'GET',
      url: url
    }).then(response => response.json());
  }

  signIn(data) {
    return this._fetch({
      method: 'POST',
      url: '/auth/login',
      body: data,
      timeout: 10000
    }).then(response => response.json());
  }

  getUser(data) {
    return this._fetch({
      method: 'GET',
      url: '/user/me',
      timeout: 10000
    }).then(response => response.json());
  }

  updateUser(data) {
    return this._fetch({
      method: 'PUT',
      url: '/user/me',
      body: data,
      timeout: 10000
    }).then(response => response.json());
  }

  signUp(data) {
    // dummydata = {
    //   "first_name": "string",
    //   "last_name": "string",
    //   "email": "string",
    //   "phone_number": "string",
    //   "password": "string"
    // }
    return this._fetch({
      method: 'POST',
      url: '/auth/signup',
      body: data
    }).then(response => response.json());
  }

  _fetch(opts) {
    opts = _.extend({
      method: 'GET',
      url: null,
      body: null,
      callback: null
    }, opts);

    var reqOpts = {
      method: opts.method,
      headers: {
        // 'X-Parse-Application-Id': this._applicationId,
        // 'X-Parse-REST-API-Key': this._restAPIKey
      }
    };
    if (this._sessionToken) {
      reqOpts.headers['Authorization'] = this._sessionToken;
    }

    // if (this._masterKey) {
    //   reqOpts.headers['X-Parse-Master-Key'] = this.masterKey;
    // }

    if (opts.method === 'POST' || opts.method === 'PUT') {
      reqOpts.headers['Accept'] = 'application/json';
      reqOpts.headers['Content-Type'] = 'application/json';
    }

    if (opts.body) {
      reqOpts.body = JSON.stringify(opts.body);
    }

    if (opts.timeout) {
      return this._timeoutPromise(opts.timeout, fetch(this.API_BASE_URL + opts.url, reqOpts));
    }

    return fetch(this.API_BASE_URL + opts.url, reqOpts);
  }

  _timeoutPromise(milisecond, promise) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error("promise timeout"))
      }, milisecond);
      promise.then(
        (res) => {
          clearTimeout(timeoutId);
          resolve(res);
        },
        (err) => {
          clearTimeout(timeoutId);
          reject(err);
        }
      );
    })
  }
};

