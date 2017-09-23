import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Input from 'react-toolbox/lib/input/Input';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import Dropdown from 'react-toolbox/lib/dropdown/Dropdown';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import Button, {IconButton} from 'react-toolbox/lib/button/Button';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'react-toolbox/lib/time_picker/TimePicker';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/index';
import navbar1 from './navbar';
import footerAskguage from './footerAskguage';
let history = null;
class HeaderBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src="img/logos/logo.png" alt />
            </div>
            <div className="col-md-4">
              <p>
                <b>Quick Menu</b>
              </p>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li>Contact Us</li>
                    <li>Terms & Condtion</li>
                    <li>About US</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li>Privacy Policy</li>
                    <li>Social Media</li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <p>
                <b>Follow us</b>
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <i className="fa fa-google-plus" aria-hidden="true" />
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <p>
                <b>Subscribe</b>
              </p>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Email address"
              />
              <button type="button" className="btn btn-danger btn-lg">
                Subscrible
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isShowNav: state.app.isShowNav
  }
}

export default connect(mapStateToProps)(HeaderBar)
