import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {

    if (props.user){
        return (
        <div className="Greeting" >
            <h2>{`hi ${props.user.username}`}</h2>
            <button 
                onClick={ () => props.logout() }
            >Sign Out</button>
        </div>
        )
    } else {
        return (
            <div className="Greeting" >
                <h2>{ `no present user` }</h2>
                <Link to="/signup" >Signup</Link>
                <br/>
                <Link to="/login">Login</Link>
                <br/>
                <Link to="/">Root</Link>
            </div>
        )
    }
};

export default Greeting;