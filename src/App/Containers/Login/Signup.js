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
import {put} from 'react-router-redux';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import styles from '../style/AppStyle'
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { first_name: '', last_name: '', phone_number: '', email: '', password: ''};
    this.handleChange =  this.handleChange.bind(this);
    this.props.dispatch(Actions.setAppProps({isShowNav: false}));
  }

  signup () {
    let data = {
      ...this.state
    };
    this.props.dispatch(Actions.signUp(data))
  }


  handleChange(name, value) {
    this.setState({...this.state, [name]: value});
  };

  render () {
    return (
      <section style={styles.center}>
          <Card style={{width: '350px'}}>
            <CardTitle
              title="Sign-up New User"
            />
              <Input type='text' label='First Name' onChange={this.handleChange.bind(this, 'first_name')} />
              <Input type='text' label='Last Name' onChange={this.handleChange.bind(this, 'last_name')} />

              <Input type='text' label='Phone' name='phne' icon='phone'  onChange={this.handleChange.bind(this, 'phone_number')} />
              <Input type='email' label='Email address' icon='email'onChange={this.handleChange.bind(this, 'email')} />

              <Input type='password' label='Password' name='password'  icon='lock' onChange={this.handleChange.bind(this, 'password')} />
            <CardActions>
              <Button label="Register" onMouseUp={this.signup.bind(this)} />
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

export default connect(mapStateToProps)(Signup)
