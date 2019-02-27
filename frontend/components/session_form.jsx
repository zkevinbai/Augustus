import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.user;
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
        if (this.props.errors.length !== 0) {
            this.props.clearErrors();
        }
        event.preventDefault();
        this.props.formAction(this.state);
    }

    render() {
        return (
            <div className="sessionForm">
                <form onSubmit={this.handleSubmit} >
                    <h1>{this.props.formType}</h1>

                    {/* <h3>placeholder for OAuth</h3>
                    <p>or</p> */}

                    <div className="sessionErrors">
                        {this.props.errors.map(error =>
                            <p key={error.length} >{error}</p>
                        )}
                    </div>

                    {(this.props.formType === "Login Form")?
                (
                    <div className="sessionInput">
                        <input
                            type="text"
                            placeholder="username or email"
                            value={this.state.credential}
                            onChange={this.handleChange("credential")}
                        />
                        <br />

                        <input
                            type="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                        <br />
                    </div>
                    ) :
                    (
                    <div className="sessionInput">
                        <input
                            type="text"
                            placeholder="username"
                            value={this.state.username}
                            onChange={this.handleChange("username")}
                        />
                        <br />

                        <input
                            type="text"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                        />
                        <br />

                        <input
                            type="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                        <br />
                    </div>
                     )}
                        <input className="continue" type="submit" value="Continue" />
                    </form>
                </div>
            );
    }
}

export default UserForm;