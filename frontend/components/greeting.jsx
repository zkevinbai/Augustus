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

            {/* <button
                onClick={() => props.deleteAccount(props.user)}
            >Delete Account</button> */}
        </div>
        )
    } else {
        return (
            <div className="Greeting" >
                <h2>{ `no present user` }</h2>
                
                {/* <Link to="/">Root</Link> */}

                <Link to="/signup" >Signup</Link>
                
                <Link to="/login">Login</Link>

                <button
                    onClick={() => props.demoLogin()}
                >Demo Login</button>

            </div>
        )
    }
};

export default Greeting;