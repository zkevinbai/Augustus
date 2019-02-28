import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {

    if (props.user){
        return (
        <div className="Greeting" >
            {/* <h2>{`hi ${props.user.username}`}</h2> */}
            <button 
                onClick={ () => props.logout() }
                className="navLogout"
                >Logout
            </button>

            {/* <button
                onClick={() => props.deleteAccount(props.user)}
            >Delete Account</button> */}
        </div>
        )
    } else {
        return (
            <div className="Greeting" >
                {/* <h2>{ `no present user` }</h2> */}
                {/* <Link to="/">Root</Link> */}

                <img src={window.logoURL} />
                <div className="navbar" >
 
                    <div className="navLogo">
                        <h1>Augustus</h1>
                    </div>

                    <div className="navFeatures">
                        <h1>Features</h1>

                    </div>

                    <div className="navHelp">
                        <h1>Contact</h1>
                    </div>

                    <div className="navAbout">
                        <h1>About</h1>
                    </div>

                    <Link to="/signup" className="navSignup">Signup</Link>

                    <Link to="/login" className="navLogin">Login</Link>

                    <Link to="/demologin" className="navDemo">Demo</Link>
                </div>
            </div>
        )
    }
};

export default Greeting;