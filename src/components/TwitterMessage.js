import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ""
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>{console.log(this.state)})
  }

  handleMaxChars = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={ this.handleInput } value={ this.state.message } />
        <span>{ this.handleMaxChars() }</span>
      </div>
    );
  }
}

export default TwitterMessage;
