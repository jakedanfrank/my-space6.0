import React from "react";
import axios from "axois";

const AuthContext =  React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvder extends React.Component {
  state = { user: null, };

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( response => {
        this.setState({ user: response.data.data, });
        history.push("/");
      })
      .catch( response => {
        console.log(response);
      })
  }

  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( response => {
        this.setState({ user: respsonse.data.data, });
        history.push("/");
      })
      .catch( response => {
        console.log(response);
      })
  }

  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then(response => {
        this.setState({ user: null, });
        history.push("/login");
      })
      .catch( response => {
        console.log(respsone);
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