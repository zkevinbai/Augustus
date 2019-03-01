import React from 'react';
import { debug } from 'util';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.user;
        if(props.otto){
            this.otto = props.otto;
            this.clearCred = 0;
            this.clearPass = 0;
            this.credentialShift = this.credentialShift.bind(this);
            this.passwordShift = this.passwordShift.bind(this);
            this.hitSubmit = this.hitSubmit.bind(this);
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        if(this.props.formType === "demo"){
            var promise = new Promise((resolve, reject) => {
                this.clearCred = setInterval(this.credentialShift, 330);
                this.credentialShift();
                this.clearPass = setInterval(this.passwordShift, 330);
                this.passwordShift();
                setTimeout(function () {
                    resolve('cat');
                }, 3600);
            });

            promise.then( () => 
                this.props.formAction(this.state)
            );
        }
    }

    credentialShift() {
        let shift;
        let newCred;
        if (this.otto[0].length === 0) {
            clearInterval(this.clearCred);
        } else {
            shift = this.otto[0].shift();
            newCred = this.state.credential + shift;
            this.setState({
                credential: newCred
            });
        }
    }

    passwordShift() {
        let shift;
        let newPass;
        if (this.otto[1].length === 0) {
            clearInterval(this.clearPass);
        } else {
            shift = this.otto[1].shift();
            newPass = this.state.password + shift;
            this.setState({
                password: newPass
            });
        }
    }

    hitSubmit(){
        this.props.formAction(this.state);
        clearInterval(this.submitId);
    }

    componentDidUpdate() {
        if (this.otto === [[],[]]){
            this.props.formAction(this.state);
        }
    }

    componentWillUnmount() {
        if (this.props.errors !== []){
            this.props.clearErrors();
        }
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
        // debugger
        // const backgrounds = ["savage", "arcadian", "consumation", "destruction"];
        // const rand = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        // const formClasses = "sessionForm " + rand;
        // debugger
        return (
            <div className="sessionForm consumation">

                <form onSubmit={this.handleSubmit} >
                    <Link to="/">
                    <div className="sessionHeader">
                        <img src={window.logoURL} />
                        <h1>Augustus</h1> 
                    </div>
                    </Link>

                    {/* <h1>{this.props.formType}</h1> */}

                    {/* <h3>placeholder for OAuth</h3>
                    <p>or</p> */}

                    <div className="sessionErrors">
                        {this.props.errors.map(error =>
                            <p key={error.length} >{error}</p>
                        )}
                    </div>

                    {(this.props.formType === "Login Form" || this.props.formType === "demo" )?
                (
                    <div className="sessionInput">
                        <input
                            autoFocus
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
                            autoFocus
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

export default SessionForm;