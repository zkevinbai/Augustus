import React from 'react';
import { Link } from 'react-router-dom';

const Splash = (props) => {
    return(  
        <div className="Splash" > 
            <div className="splashQuote" >
                <h1>Focus on your thoughts, and put them to words. 
                    Write beautifully with Augustus.</h1>
            </div>
                   
            <div className="splashBody">

                <div className="splashFeatures">
                    {/* <div className="featureHead"> */}
                        <h1 className="featureHead">Features</h1>
                    {/* </div> */}
                    <div className="featureAuth featureFeature">
                        <h1>Authentication</h1>
                        <i className="fas fa-user-shield"></i>
                    </div>
                    <div className="featureNotebooks featureFeature">
                        <h1>Notebooks</h1>
                        <i className="fas fa-book"></i>
                    </div>
                    <div className="featureNotes featureFeature">
                        <h1>Notes</h1>
                        <i className="fas fa-sticky-note"></i>
                    </div>
                    <div className="featureTags featureFeature">
                        <h1>Tags</h1>
                        <i className="fas fa-bookmark"></i>
                    </div>
                    <div className="featureEditing featureFeature">
                        <h1>Rich Text Editing</h1>
                        <i className="fas fa-edit"></i>
                    </div>
                    <div className="featurePlaceholder featureFeature">
                        <h1>Search</h1>
                        <i className="fas fa-search"></i>
                    </div>

                </div>
            </div>

            <div className="splashFooter">
                <h1>Contact</h1>
                <h1>About</h1>
            </div>
        </div>      
    )
};

export default Splash;