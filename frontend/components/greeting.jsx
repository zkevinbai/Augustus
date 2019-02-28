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

                <div className="navbar" >

                    <div className="navPlans">
                        <h2>Plans</h2>
                        <div className="dropdown-content">
                            <h3></h3>
                        </div>
                    </div>
                    <div className="navFeatures">Features</div>
                    <div className="navHelp">Help & Learning</div>
                    <div className="navAbout">About Us</div>

                    <Link to="/signup" className="navSignup">Signup</Link>

                    <Link to="/login" className="navLogin">Login</Link>

                    <Link to="/demologin" className="navDemo">Demo</Link>
                </div>
            </div>
        )
    }
};

export default Greeting;