import React from 'react';
import { Link } from 'react-router-dom';

class Ink extends React.Component{
    constructor(props){
        super(props);
        this.state = {hidden: true};
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
                    <i className="fas fa-angle-down"></i>
                </a>
                <div style={hidden} className="dropDiv" >
                    <button onClick={() => this.props.logout()}>Logout</button>
                </div>
            </div>

            <div className="searchBar" >
                <a onClick={() => console.log("click")}> 
                    <span class="searchbar">
                        <input type="text" placeholder="Search all notes"/>
                        <button class="fas fa-search"></button>
                    </span>
                </a>
            </div>

            <div className="newNote" >
                <a onClick={() => console.log("click")}> 
                    <i className="fas fa-feather-alt"></i>
                    <h1>Add New Note</h1>
                </a>
            </div>
            
            <div className="shortcuts" >
                <a onClick={() => console.log("click")}> 
                    <h1>Shortcuts</h1>
                </a>
            </div>

            <div className="allNotes" >
                <a onClick={() => console.log("click")}> 
                    <h1>All Notes</h1>
                </a>
            </div>

            <div className="Notebooks" >
                <a onClick={() => console.log("click")}> 
                    <h1>Notebooks</h1>
                </a>
            </div>

            <div className="sharedWith" >
                <a onClick={() => console.log("click")}>
                    <h1>Shared with Me</h1>
                </a>
            </div>

            <div className="Tags" >
                <a onClick={() => console.log("click")}>
                    <h1>Tags</h1>
                </a>
            </div>

            <div className="Trash" >
                <a onClick={() => console.log("click")}>
                    <h1>Trash</h1>
                </a>
            </div>

            <div className="Premium" >
                <a onClick={() => console.log("click")}>
                    <h1>Premium</h1>
                </a>
            </div>
            
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