import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credential: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log(this.state);
        return(
            <div>
                <form onSubmit={ this.handleSubmit } >
                    <h1>New Session</h1>
                    {/* <h3>placeholder for OAuth</h3>

                    <p>or</p> */}

                    {this.props.errors.map (error => <p>{error}</p>)}

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