import React from 'react';

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
        console.log(this.props);
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h1>New User</h1>

                    {/* <h3>placeholder for OAuth</h3>

                    <p>or</p> */}

                    {this.props.errors.map(error => <p>{error}</p>)}

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