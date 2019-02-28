import React from 'react';
import { Route } from 'react-router-dom';
import {
    AuthRoute,
    ProtectRoute
} from '../util/route_util';

import GreetingContainer from './landing/greeting_container';
import Splash from './landing/splash';

import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import LoginDemoFormContainer from './session/login_demo_form_container';

import InkContainer from './ink/ink_container';

const App = () => (
    <div className="App" >
        <div className="landingPage" >
            <AuthRoute path="/" exact component={GreetingContainer} />
            <AuthRoute path="/" exact component={Splash} />

            <div className="SessionForms">
                <AuthRoute path="/login" exact component={ LoginFormContainer } />
                <AuthRoute path="/signup" exact component={ SignupFormContainer } />
                <AuthRoute path="/demologin" exact component={ LoginDemoFormContainer } />
            </div>
        </div>

        <div className="inkPage" >
            <ProtectRoute path="/" exact component={InkContainer} />
        </div>
    </div>
);

export default App;