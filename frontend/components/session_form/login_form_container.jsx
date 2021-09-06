import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';


const mSTP = ({ error }) => ({
    //maybe add session to error? 
    error,
    formType: 'login',
    navLink: <Link to="/signup">sign up</Link>
});

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(LoginForm);