import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (storeState) => {
    return { loggedIn: Boolean(storeState.session.id) };
};

const Auth = 
( { component: Component, path, loggedIn, exact} ) => (
    <Route path={ path } exact={ exact } render={ (props) => (
            !loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));