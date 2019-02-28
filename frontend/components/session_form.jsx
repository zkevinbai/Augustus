import React from 'react';
import { debug } from 'util';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.user;
        if(props.otto){
            this.otto = props.otto;
            this.clearCred = 0;
            this.clearPass = 0;
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.credentialShift = this.credentialShift.bind(this);
        this.passwordShift = this.passwordShift.bind(this);
        this.coolLogin = this.coolLogin.bind(this);
    }
    
    componentDidMount() {
        // debugger
        if(this.props.formType === "demo"){
            console.log("demo");
            console.log(this.props);
            console.log(this.otto);
            // this.coolLogin();

            // this.clearCred = setInterval(this.credentialShift, 330);
            // this.credentialShift();
            // this.clearPass = setInterval(this.passwordShift, 330);
            // this.passwordShift();
            const promise = new Promise((resolve, reject) => {
                this.clearCred = setInterval(this.credentialShift, 330);
                this.credentialShift();
                this.clearPass = setInterval(this.passwordShift, 330);
                this.passwordShift();
            });

            promise.then( () => {
                this.props.formAction(this.state);
            });

            // this.props.formAction(this.state);
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

    coolLogin(){
        // debugger
        // let shift;
        // let newCred;
        // let newPass;
        // while (this.otto[0].length !== 0){
        //     shift = this.otto[0].shift();
        //     newCred = this.state.credential + shift;
        //     this.state.credential = newCred;
        // } 
        
        // while (this.otto[1].length !== 0){
        //     shift = this.otto[1].shift();
        //     newPass = this.state.password + shift;
        //     this.state.password = newPass;
        // } 
        
        // this.props.formAction(this.state);
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
                    <div className="sessionHeader">
                        <img src={window.logoURL} />
                        <h1>Augustus</h1> 
                    </div>

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