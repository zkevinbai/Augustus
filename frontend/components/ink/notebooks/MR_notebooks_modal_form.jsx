import React from 'react';
import { Link } from 'react-router-dom';

class NotebookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.notebook;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.fetchNotebook){
            this.props.fetchNotebook(this.props.match.params.id);
        }
    }

    hitSubmit() {
        this.props.formAction(this.state);
        clearInterval(this.submitId);
    }

    handleChange(field) {
        return (event) => (
            this.setState({
                [field]: event.target.value
            })
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.errors.length !== 0) {
            this.props.clearErrors();
        }
        this.props.formAction(this.state).then(
            () => this.props.history.push('/notebooks'),
            () => this.props.history.push(this.props.location.pathname)
        );
        
    }

    render() {
        return (
            <div className="modal">
                <form className="notebookForm" onSubmit={this.handleSubmit} >
                    <div className="notebookFormHeader" >
                        <div className="notebookErrors">
                            {this.props.errors.map(error =>
                                <p key={error.length} >{error}</p>
                            )}
                        </div>
                        <i className="fas fa-times"
                            onClick={() => this.props.history.push('/notebooks')}
                        ></i>
                    </div>
                    <input
                        autoFocus
                        type="text"
                        placeholder="notebook title"
                        value={this.state.notebook_title}
                        onChange={this.handleChange("notebook_title")}
                    />
                    <input className="continue" type="submit" value="Continue" />
                </form>
            </div>
        );
    }
}

export default NotebookForm;