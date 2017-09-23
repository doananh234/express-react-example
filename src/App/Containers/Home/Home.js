import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Actions from '../../Actions/Creators';
import Input from 'react-toolbox/lib/input/Input';
import Button, {IconButton} from 'react-toolbox/lib/button/Button';
import RaisedButton from 'material-ui/RaisedButton';
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.dispatch(Actions.setAppProps({isShowNav: true}));
  }

  render () {
    return (
      <section>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Home)
