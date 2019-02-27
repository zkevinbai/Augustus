import React from 'react';
import { Link } from 'react-router-dom';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
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
        this.props.formAction(this.state);
    }

    render() {
        // console.log(this.props);
        // console.log(this.props.errors);
        return (
            <div className="sessionForm">
                <Link to="/">Root</Link>

                <form onSubmit={this.handleSubmit} >
                    <h1>Signup Form</h1>

                    {/* <h3>placeholder for OAuth</h3>
                    <p>or</p> */}

                    <div>
                        {this.props.errors.map(error =>
                            <p key={error.length} >{error }</p>
                        )}
                    </div>

                    <input
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleChange("username")}
                    />
                    <br/>

                    <input
                        type="text"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange("email")}
                    />
                    <br/>

                    <input
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                    />
                    <br />

                    <input type="submit" value="Continue" />
                </form>
            </div>
        );
    }
}

export default UserForm;