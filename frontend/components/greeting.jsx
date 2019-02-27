import React from 'react';

const Greeting = (props) => {

    if (props.user){
        return (
        <div>
            <h2>{`hi ${props.user.username}`}</h2>
        </div>
        )
    } else {
        return (
            <div>
                <h2>{ `no present user` }</h2>
            </div>
        )
    }
};

export default Greeting;