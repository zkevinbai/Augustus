import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {

    if (props.user){
        return (
        <div>
            <h2>{`hi ${props.user.username}`}</h2>
            <button 
                onClick={ () => props.logout() }
            >Sign Out</button>
        </div>
        )
    } else {
        return (
            <div>
                <h2>{ `no present user` }</h2>
                <Link to="/signup" >Signup</Link>
                <br/>
                <Link to="/login">Login</Link>
            </div>
        )
    }
};

export default Greeting;