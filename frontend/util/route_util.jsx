import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (storeState, ownProps) => {
    return { 
        loggedIn: Boolean(storeState.session.id),
        location: ownProps.history.location.pathname 
    };
};

const authorized = ["/notebooks", "/notebook"];

const Auth = 
( { component: Component, path, loggedIn, location, exact} ) => {
    if (authorized.some( element => location.includes(element) ) ){
        return <Redirect to={location} />
    } else {
        return <Route path={ path } exact={ exact } render={ (props) => (
                !loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            )}
        />
    }
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

const Protect = 
( { component: Component, path, loggedIn, exact} ) => (
    <Route path={ path } exact={ exact } render={ (props) => (
            loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        )}
    />
);

export const ProtectRoute = withRouter(connect(mapStateToProps, null)(Protect));