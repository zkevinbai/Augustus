import React from 'react';
import { Link } from 'react-router-dom';

class PremiumCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleGoBack() {
        let curr = this.props.history.location.pathname;
        curr = curr.slice(0, curr.length - 11);
        this.props.history.replace(curr);
    }

    render() {
        return (
            <div className="modal premiumModal" onClick={this.handleGoBack}>
                <div className="PremiumFeatures">
                    <i className="fas fa-times"></i>
                    <div>
                        <h1>
                            Thank You for Considering Premium
                        </h1>
                        <p>
                            Feel free to get in touch, or learn more.
                        </p>
                        <a href="https://linkedin.com/in/kevinbai/">Get in Touch</a>
                        <a href="https://nature.berkeley.edu/news/2018/01/student-spotlight-kevin-bai">About the Developer</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default PremiumCard;