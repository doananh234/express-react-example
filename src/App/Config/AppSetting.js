
const config = {
  // PARSE_ID: 'xh7e2OhXMAsuZif0ZuSjtKUZeSGP0quEIU9s1VWF',
  // PARSE_JAVASCRIPT_KEY: 'nb2uBbkPm5HNnZrsqxKtqXebLAg8mVknszafJd5V',
  // PARSE_API_KEY: 'T6XYu7rzzcuiZFinDLcMXYtKY8y3xZOQLn6NoGif',
  URL: 'http://45.55.90.149/api/v1',
  HOST: 'http://45.55.90.149/api/v1',
  DEVHOST: 'http://192.168.11.103:3000/api/v1',
  GOOGLE_CLIENT_ID: '583177149290-v0uai84vvbj7mlvjcsa9qockfsf9hegs.apps.googleusercontent.com',
  GOOGLE_REVERSED_CLIENT_ID: 'com.googleusercontent.apps.968701237150-1uldf2oi970hr45uqveq0pfhpu49b827',
  GOOGLE_WEB_CLIENT_ID: '583177149290-5ebuq7187pf6vrqlv7sk9rc39hjmsktk.apps.googleusercontent.com',
  // GOOGLE_WEB_CLIENT_ID: '968701237150-1uldf2oi970hr45uqveq0pfhpu49b827.apps.googleusercontent.com'
  GOOGLE_PLACE_KEY: 'AIzaSyB7CHUBsexTJWKPVXIP2dIRd0J9J-voqjM'
};

export const BOOKING_TYPE = {
	UPCOMING: 'upcoming',
	PAST_BOOKING: 'past',
	CANCEL_BOOKING: 'cancel'
};
export const CATEGORY = [
  'Wheat',
  'Peanuts',
  'Fish',
  'Shellfish',
  'Nuts/Seeds',
  'Eggs',
  'Halal'
];
export const ErrorCode = {
  11000: 'Error! Email is exist.'
};


const DUMMY_DATA_HOME = [{}, {}, {}, {}, {}, {}, {}, {}];

const DUMMY_DATA_BUSINESSDETAIL = {
  processed: [{}, {}, {}],
  pastNotification: [{}, {}, {}],
};
export const DUMMY_DATA = {
  DUMMY_DATA_HOME: DUMMY_DATA_HOME,
  DUMMY_DATA_BUSINESSDETAIL: DUMMY_DATA_BUSINESSDETAIL
}

export default config;
