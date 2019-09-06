import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Album from '../components/Hero/index.js'

class Landing extends Component {

  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
        <Album />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      return dispatch(login(username, password));
    },
  };
};

export default connect(null, mapDispatchToProps)(Landing);