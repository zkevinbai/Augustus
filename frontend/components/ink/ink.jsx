import React from 'react';
import { 
    Link,
    NavLink
} from 'react-router-dom';
import { ProtectRoute } from '../../util/route_util';

import LNotebooksIndexContainer from './notebooks/L_notebooks_index_container';
import MRNotebooksIndexContainer from './notebooks/MR_notebooks_index_container';
import MRNotebooksCreateModalContainer from './notebooks/MR_notebooks_modal_create_form_container';
import MRNotebooksEditModalContainer from './notebooks/MR_notebooks_modal_edit_form_container';

import PremiumFeatures from './premium/premium_features';
import PremiumCard from './premium/premium_card';

import MUserNotesContainer from './notes/M_user_notes_container';
import MNotebookNotesContainer from './notes/M_notebook_notes_container';

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
        this.notebookCreateModal = this.notebookCreateModal.bind(this);
        this.notebookEditModal = this.notebookEditModal.bind(this);
        this.premiumFeatures = this.premiumFeatures.bind(this);
        this.premiumCard = this.premiumCard.bind(this);

        this.triggerPremium = this.triggerPremium.bind(this);
        this.triggerPremiumCard = this.triggerPremiumCard.bind(this);

        this.allNotes = this.allNotes.bind(this);
        this.allNotebookNotes = this.allNotebookNotes.bind(this);
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
        return <ProtectRoute path="/notebooks" component={MRNotebooksIndexContainer} />
    }

    notebookCreateModal(){
        return <ProtectRoute path="/notebooks/new" exact component={MRNotebooksCreateModalContainer} />
    }

    notebookEditModal(){
        return <ProtectRoute path="/notebooks/edit/:id" exact component={MRNotebooksEditModalContainer} />
    }

    premiumFeatures(){
        return <ProtectRoute path="/:params*/premium" exact component={PremiumFeatures} />
    }

    triggerPremium(){
        let pathName = this.props.history.location.pathname;
        if( pathName === "/"){
            pathName += "premium";
        } else {
            pathName += "/premium";
        }

        this.props.history.push(pathName);
    }

    premiumCard(){
        return <ProtectRoute path="/:params*/premiumcard" exact component={PremiumCard} /> 
    }

    triggerPremiumCard(){
        let pathName = this.props.history.location.pathname;
        if( pathName === "/"){
            pathName += "premiumcard";
        } else {
            pathName += "/premiumcard";
        }

        this.props.history.push(pathName);
    }

    allNotes(){
        let pathName = this.props.history.location.pathname;
        if(!pathName.includes("notebook")){
            return <ProtectRoute path="/" component={MUserNotesContainer} /> 
        }
    }

    allNotebookNotes(){
        return <ProtectRoute path="/notebook/:id" component={MNotebookNotesContainer} /> 
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
                        <button className="fas fa-search"
                                onClick={this.triggerPremium}
                        ></button>
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
                <a onClick={this.triggerPremium}> 
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
                <a onClick={this.triggerPremium}> 
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
                <a onClick={this.triggerPremium}> 
                    <i className="fas fa-trash"></i>
                    <h1>Trash</h1>
                </a>
            </div>

            <div className="Premium leftbar-sub" >
                <a onClick={this.triggerPremiumCard}> 
                    <i className="fas fa-chevron-circle-up"></i>
                    <h1>Premium</h1>
                </a>
            </div>
        </div>
    
        {this.notebooks()}
        {this.notebookCreateModal()}
        {this.notebookEditModal()}
        {this.premiumFeatures()}
        {this.premiumCard()}

        <div className="mbar bar">
            {this.allNotes()}
            {this.allNotebookNotes()}
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