import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.username.current.value);
    console.log(9);
  }
  render() {
    return (
      <div>
        <h1>Log in form</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
