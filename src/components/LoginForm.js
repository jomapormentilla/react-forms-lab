import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = e => {
    e.preventDefault()
    if (this.state.username.length !== 0 && this.state.password.length !== 0) {
      this.props.handleLogin( this.state )
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleLogin }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={ this.handleInput } />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={ this.handleInput } />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
