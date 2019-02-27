import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import AuthRoute from '../util/route_util';

const App = () => (
    <div>
        <h1>Salve Mundi</h1>
        < GreetingContainer />
        <AuthRoute path="/login" component={ LoginFormContainer } />
        <AuthRoute path="/signup" component={ SignupFormContainer } />
    </div>
);

export default App;