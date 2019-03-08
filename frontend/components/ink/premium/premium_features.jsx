import React from 'react';
import { Link } from 'react-router-dom';

class PremiumFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleGoBack(){
        let curr = this.props.history.location.pathname;
        curr = curr.slice(0, curr.length-8);
        this.props.history.replace(curr);
    }

    render() {
        return (
            <div className="modal premiumModal" onClick={this.handleGoBack}>
                <div className="PremiumFeatures">
                    <i className="fas fa-times"></i>
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

{/* <div className="modal premiumModal" onClick={() => this.props.history.goBack()}> */}
