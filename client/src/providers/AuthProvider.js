import React from "react";
import axios from "axios";

const AuthContext =  React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, };

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
    .then( response => {
      debugger
        this.setState({ user: response.data.data, });
        history.push("/");
      })
      .catch( error => {
        console.log( error );
      })
  }

  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( response => {
        this.setState({ user: response.data.data, });
        history.push("/");
      })
      .catch( error => {
        console.log( error );
      })
  }

  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then( response => {
        this.setState({ user: null, });
        history.push("/login");
      })
      .catch( error => {
        console.log( error );
      })
  }

  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user, }),
      }}>
        { this.props.children }
      </AuthContext.Provider>

    );
  };
};