import React from 'react';
import { Link } from 'react-router-dom';

class NotebookForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = props.notebook;
        this.state = {
            notebook_title: "",
            user_id: 11
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    hitSubmit() {
        this.props.formAction(this.state);
        clearInterval(this.submitId);
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    handleChange(field) {
        return (event) => (
            this.setState({
                [field]: event.target.value
            })
        );
    }

    handleSubmit(event) {
        if (this.props.errors.length !== 0) {
            this.props.clearErrors();
        }
        event.preventDefault();
        this.props.formAction(this.state);
    }

    render() {
        return (
            <div className="notebookForm modal">
                <form onSubmit={this.handleSubmit} >
                    <input
                        autoFocus
                        type="text"
                        placeholder="notebook title"
                        value={this.state.notebook_title}
                        onChange={this.handleChange("notebook_title")}
                    />
                    <br />
                    <input className="continue" type="submit" value="Continue" />
                </form>
            </div>
        );
    }
}

export default NotebookForm;