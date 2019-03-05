import React from 'react';
import { Link } from 'react-router-dom';

class PremiumFeatures extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal">
                <div className="PremiumFeatures">
                    <i className="fas fa-times"
                        onClick={() => this.props.history.goBack()}
                    ></i>
                    <div>
                        <h1>
                            This is a Premium Feature
                        </h1>
                        <p>
                            please get in touch if you would
                            like to see it implemented in the future 
                        </p>
                        <a href="https://linkedin.com/in/kevinbai/">Get in Touch</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default PremiumFeatures;