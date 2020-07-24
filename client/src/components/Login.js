import React from "react";
import axios from 'axios';

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    console.log("Handle change has been invoked")
    this.setState({
      credentials: { 
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log("Login function has been called")
    axios
      .post("http://localhost:5000/api/login", {
        username: 'Lambda School',
        password: 'i<3Lambd4'
      })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <h1>Welcome to the Bubble App!</h1>

        <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />

            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />

            <button>Login</button>

        </form>
        
      </div>
    );
  }
};

export default Login;
