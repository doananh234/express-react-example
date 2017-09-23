import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Actions from '../../Actions/Creators';
import Input from 'react-toolbox/lib/input/Input';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import Button, {IconButton} from 'react-toolbox/lib/button/Button';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'react-toolbox/lib/time_picker/TimePicker';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/index';
import UploadImage from '../../Components/UploadImage';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', password: '', multiline: '', email: '', hint: '', label: '' };
    this.handleChange =  this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.props.dispatch(Actions.setAppProps({isShowNav: false}));
  }

  login () {

    return;
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.dispatch(Actions.signIn(data))
  }


  handleChange(name, value) {
    this.setState({...this.state, [name]: value});
  };

  render () {
    return (
      <section>
          <Card style={{width: '350px'}}>
            <CardTitle
              title="Sign-In"
            />
            <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
            <Input type='password' label='Password' name='password' icon='lock' value={this.state.password} onChange={this.handleChange.bind(this, 'password')} />

            <CardActions>
              <Button label="Login" onMouseUp={this.login} />
            <Button label="Register" onMouseUp={() => {this.props.dispatch(push('/signup'))}} />
            </CardActions>
          </Card>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Login)
