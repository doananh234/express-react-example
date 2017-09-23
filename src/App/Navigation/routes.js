import React from 'react'
import { StaticRouter, Switch, Route, Router, Link } from 'react-router'
import App from '../Containers/App'
import Login from '../Containers/Login'
import Signup from '../Containers/Login/Signup'
import Home from '../Containers/Home/Home'
import HeaderBar from '../Containers/GlobalComponents/HeaderBar'
import Message from '../Containers/GlobalComponents/Message'
import BodyIndex from '../Containers/Html2React_index/BodyIndex'
export default class _Router  extends React.Component {

	render () {
		return (
				<div>
					<HeaderBar />
					<Message />
	      	<Route exact path="/" component={App} />
					<Route exact path="/html2react" component={BodyIndex} />
	      	<Route  path="/login" component={Login} />
					<Route  path="/signup" component={Signup} />
					<Route  path="/home" component={Home} />
				</div>
      );
	}
}
