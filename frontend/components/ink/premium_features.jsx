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
                    <div className="PremiumFeaturesHeader" >
                        <div className="notebookErrors">
                        </div>
                        <i className="fas fa-times"
                            onClick={() => this.props.history.goBack()}
                        ></i>
                    </div>
                    <div>
                        <h1>This is a premium Feature</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default PremiumFeatures;