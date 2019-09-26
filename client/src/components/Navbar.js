import React from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image, Segment, } from "semantic-ui-react";
import { Link, withRouter, } from "react-router-dom";

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item
              id="login"
              name="login"
              active={location.pathname === "/login" }
            />
          </Link>
          <Link to="/register">
            <Menu.Item
              id="register"
              name="sign up"
              active={location.pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <Segment>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              name="home"
              id="home"
              active={this.props.location.pathname === "/"}
              />
          </Link>
          <Link to="/my_friends">
            <Menu.Item
              name="my friends"
              id="my friends"
              active={this.props.location.pathname === "/my_friends"}
              />
          </Link>
            { this.rightNavItems() }
        </Menu>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '150px',
            backgroundColor: "black",            
          }}>
            <Image src={require("../images/myspace.jpg")} alt="logo" />
          </div>
  
        </div>
      </Segment>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);