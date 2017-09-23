import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme.js';
import  './toolbox/theme.css';
import './index.css';
require("babel-core/register");
require("babel-polyfill");
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
ReactDOM.render(
	<ThemeProvider theme={theme}>
	<MuiThemeProvider>
			<App />
			</MuiThemeProvider>
    </ThemeProvider>,  document.getElementById('root'));
registerServiceWorker();
