import React from 'react';
import axios from 'axios';
import { AuthConsumer, } from "../providers/AuthProvider";

class FetchUser extends React.Component {
  state = { loaded: false, };

  componentDidMount() {
    const { auth: { authenticated, setUser, }, } = this.props;

    if (authenticated) {
      this.loaded();
    } else {
      if (this.checkLocalToken()) {
        axios.get('/api/auth/validate_token')
          .then( response => {
            setUser(response.data.data);
            this.loaded();
          })
          .catch( error => {
            this.loaded();
          })
      } else {
        this.loaded();
      }
    }
  }

  checkLocalToken = () => {
    const token = localStorage.getItem('access-token');
    return token;
  }

  loaded = () => this.setState({ loaded: true, });

  render() {
    return this.state.loaded ? this.props.children : null;
  }
}

const ConnectedFetchUser = (props) => (
  <AuthConsumer>
    { auth => 
      <FetchUser { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedFetchUser;
