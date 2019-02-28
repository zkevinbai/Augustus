import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import Splash from './splash';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import LoginDemoFormContainer from './session/login_demo_form_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
    <div className="landingPage" >
        <Route path="/" exact component={GreetingContainer} ></Route>
        <Route path="/" exact component={Splash} ></Route>

        <div className="SessionForms">
            <AuthRoute path="/login" exact component={ LoginFormContainer } />
            <AuthRoute path="/signup" exact component={ SignupFormContainer } />
            <AuthRoute path="/demologin" exact component={ LoginDemoFormContainer } />
        </div>
    </div>
);

export default App;