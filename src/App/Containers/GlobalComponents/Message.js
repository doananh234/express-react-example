import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Actions from '../../Actions/Creators';
import Snackbar from 'react-toolbox/lib/snackbar/Snackbar';
class Message extends Component {
  constructor(props) {
    super(props);

  }

  handleSnackbarClick = (event, instance) => {
    console.log('handleSnackbarClick', event, instance);
    this.props.dispatch(Actions.toggleMessage(this.props.message));
  };

  handleSnackbarTimeout = (event, instance) => {
    console.log('handleSnackbarClick', event, instance);
    this.props.dispatch(Actions.toggleMessage(this.props.message));
  };

  render () {
    return (
      <Snackbar
        action='Dismiss'
        active={this.props.active}
        label={this.props.message}
        timeout={2000}
        onClick={this.handleSnackbarClick}
        onTimeout={this.handleSnackbarTimeout}
        type='cancel'
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    active: state.app.active || false,
    message: state.app.message
  }
}

export default connect(mapStateToProps)(Message)
