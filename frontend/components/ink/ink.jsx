import React from 'react';
import { Link } from 'react-router-dom';

class Ink extends React.Component{
    constructor(props){
        super(props);
        this.state = {hidden: false};
        this.hide = this.hide.bind(this);
    }

    hide(e) {
        this.setState({hidden: !this.state.hidden});
    }

    render(){
        const hidden = this.state.hidden ? {display: "none"} : {display: "block"};
        return (
    <div className="bars">
        <div className="lbar bar">
            <div className="userDropdown" >
                <a onClick={this.hide}>                            
                    <img src={window.logoURL} />
                    <h1>{this.props.user.username}</h1>
                    <div style={hidden} className="dropDiv" >
                        <button onClick={() => this.props.logout()}>Logout</button>
                    </div>
                </a>
            </div>
            <h1>Search Bar</h1>
            <h1>Add New Note</h1>
            <ul>
                <li>Shortcuts</li>
                <li>All Notes</li>
                <li>Notebooks</li>
                <li>Shared with Me</li>
                <li>Tags</li>
                <li>Trash</li>
                <li>Premium</li>
            </ul>
        </div>
        <div className="mbar bar">
            <h1>All Notes</h1>
            <ul>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
            </ul>
        </div>
        <div className="content bar">
            <h1>Main Nav</h1>
            <p>
                content goes here
        </p>
            <h1>Tags</h1>
        </div>
    </div>
        )
    }
}
export default Ink;