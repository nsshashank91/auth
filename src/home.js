import React, { Component } from 'react';


class Home extends Component {


    onClick = () => this.props.history.push("/login");

     register = () =>{
       console.log("register")
      this.props.history.push("/register");
    }

  render() {
    return (
     <div>
         <h1>Home</h1>
         <h2>Routing App</h2>
         <button onClick={this.onClick}>Login</button>
         <button onClick={this.register}>Register</button>
     </div>
    );
  }
}

export default Home;
