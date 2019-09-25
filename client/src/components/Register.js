import React from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from "semantic-ui-react";

class Register extends React.Component {
  state = { email: "", password: "", passwordConfirmation: "", };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    debugger
    
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
    handleRegister({ email, password, passwordConfirmation, }, history);
    else
        alert("..YO, Passwords Do Not Match!")
  }

  handleChange = (event) => {
    const { name, value, } = event.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, passwordConfirmation, } = this.state;

    return (
      <Segment basic>
        <Header as="h1" textAlign="center">Sign Up</Header>
        <Form onSubmit={this.handleSubmit}>
          {/* ADD FIRST NAME 
              LAST NAME
              BIRTHDAY
              GENDER */}
          <Form.Input 
            label="Email"
            required
            autoFocus
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Password"
            required
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Password Confirmation"
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder="Password Confirmation"
            type="password"
            onChange={this.handleChange}
          />
          <Segment textAlign="center" basic>
            <Button primary type="submit">Sign Up</Button>
          </Segment>
        </Form>
      </Segment>
    );
  };
};

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    );
  };
};