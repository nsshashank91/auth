import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: ''
		}
    }
    
    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
    }
    
    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:9016/login', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	register = () =>{
		console.log("register")
	   this.props.history.push("/register");
	 }
  render() {
	const { username, password} = this.state
    return (
     <div>
         <h1>Login</h1>
         <form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="username"
							placeholder="UserName"          
							value={username}
							onChange={this.changeHandler}
							
						/>
					</div>
					<div>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							onChange={this.changeHandler}
							
						/>
					</div>
					<button type="submit">Login</button>
                    </form>
					<button onClick={this.register}>Register</button>
     </div>
    );
  }
}

export default Login;
