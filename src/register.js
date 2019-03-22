import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
	
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
			cpassword:''
		}
    }
    
    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
    }
    
    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:9016/register', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

  render() {
	const { username, password,cpassword} = this.state
    return (
     <div>
         <h1>Register</h1>
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
					<div>
						<input
							type="password"
							name="cpassword"
							placeholder="Confirm Password"
							value={cpassword}
							onChange={this.changeHandler}
							
						/>
					</div>
					<button type="submit">Register</button>
                    </form>
     </div>
    );
  }
}

export default Register;
