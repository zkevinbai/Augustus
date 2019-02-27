import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';

const App = () => (
    <div>
        <h1>Salve Mundi</h1>
        < GreetingContainer />

        <Route path="/login" component={ LoginFormContainer } />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;