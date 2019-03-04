import React from 'react';
import { 
    Link,
    NavLink
} from 'react-router-dom';
import { ProtectRoute } from '../../util/route_util';

import LNotebooksIndexContainer from './notebooks/L_notebooks_index_container';
import MRNotebooksIndexContainer from './notebooks/MR_notebooks_container';
import MRNotebookModalForm from './notebooks/MR_notebooks_modal_form';

class Ink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logout: true,
            notebooks: true,
        };
        this.hide = this.hide.bind(this);
        this.hidden = this.hidden.bind(this);

        this.notebooks = this.notebooks.bind(this);
        this.notebookModal = this.notebookModal.bind(this);
    }

    hide(field) {
        return (e) => {
            this.setState({ [field]: !this.state[field]});
        };
    }

    hidden(field){
        return this.state[field] ? { display: "none" } : { display: "block" };
    }

    notebooks(){
        return <ProtectRoute path="/notebooks" exact component={MRNotebooksIndexContainer} />
    }

    notebookModal(){
        return <ProtectRoute path="/notebook/new" exact component={MRNotebookModalForm} />
    }

    render(){
        // debugger
    return (
    <div className="bars">
        <div className="lbar bar">
            <div className="userDropdown" >
                <a onClick={this.hide("logout")}>                            
                    <img src={window.logoURL} />
                    <h1>{this.props.user.username}</h1>
                    <i className="fas fa-angle-down"></i>
                </a>

                <div style={this.hidden("logout")} className="dropDiv" >
                    <button onClick={() => this.props.logout()}>
                    {`Logout`}</button>
                </div>
            </div>

            <div className="searchBar" >
                <a onClick={() => console.log("click")}> 
                    <span className="searchbar">
                        <input type="text" placeholder="Search all notes"/>
                        <button className="fas fa-search"></button>
                    </span>
                </a>
            </div>

            <div className="newNote" >
                <a onClick={() => console.log("click")}> 
                    <i className="fas fa-feather-alt"></i>
                    <h1>Add New Note</h1>
                </a>
            </div>
            
            <div className="shortcuts leftbar-sub" >
                <a onClick={() => console.log("click")}> 
                    <i className="fas fa-star"></i>
                    <h1>Shortcuts</h1>
                </a>
            </div>

            <div className="allNotes leftbar-sub" >
                <Link to="/" >
                    <i className="fas fa-sticky-note"></i>
                    <h1>All Notes</h1>
                </Link>
            </div>

            <div className="Notebooks leftbar-sub" >
                <div>
                    <i className="fas fa-atlas"></i>
                    <NavLink to="/notebooks" >
                        <h1>Notebooks</h1>
                    </NavLink>
                    <i className="fas fa-angle-down"
                        onClick={this.hide("notebooks")}
                    ></i>
                </div>
                <LNotebooksIndexContainer style={this.hidden("notebooks")} />
            </div>

            <div className="sharedWith leftbar-sub" >
                <a onClick={() => console.log("click")}>
                    <i className="fas fa-share-alt"></i>
                    <h1>Shared with Me</h1>
                </a>
            </div>

            <div className="Tags leftbar-sub" >
                <a onClick={() => console.log("click")}>
                    <i className="fas fa-bookmark"></i>
                    <h1>Tags</h1>
                </a>
            </div>

            <div className="Trash leftbar-sub" >
                <a onClick={() => console.log("click")}>
                    <i className="fas fa-trash"></i>
                    <h1>Trash</h1>
                </a>
            </div>

            <div className="Premium leftbar-sub" >
                <a onClick={() => console.log("click")}>
                    <i className="fas fa-chevron-circle-up"></i>
                    <h1>Premium</h1>
                </a>
            </div>
        </div>
    
        {this.notebooks()}
        {this.notebookModal()}

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