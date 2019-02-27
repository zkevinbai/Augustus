import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credential: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleChange(field){
        return (event) => (
            this.setState({
                [field]: event.target.value
            })
        );
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.formAction(this.state);
    }

    render(){
        // console.log(this.state);
        // console.log(this.props.errors);
        return(
            <div className="sessionForm">
                <Link to="/">Root</Link>

                <form onSubmit={ this.handleSubmit } >
                    <h1>Login Form</h1>
                    {/* <h3>placeholder for OAuth</h3>

                    <p>or</p> */}

                    {this.props.errors.map(error => <p key={error.length} >{error}</p>)}

                    <input 
                        type="text"
                        placeholder="username or email"
                        value={ this.state.credential }
                        onChange={ this.handleChange("credential") }
                    />
                    <br/>
                    
                    <input 
                        type="password"
                        placeholder="password"
                        value={ this.state.password }
                        onChange={this.handleChange("password") }
                    />
                    <br/>

                    <input type="submit" value="Continue"/>
                </form>
            </div>
        );
    }
}

export default LoginForm;