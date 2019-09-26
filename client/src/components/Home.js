import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Header, Image, Card, Button, Icon, } from "semantic-ui-react";

class Home extends React.Component {
  state = { users: [], };

  componentDidMount() {
    axios.get("/api/user")
    .then( response => this.setState({ users: response.data, }))
  }

  render() {
    return (
      <div>
        <br />
        {/* <Card Key={friend.id}>
          <Image src={friend.avatar} /> 
          <Card.Content>
            <Card.Header>
              {friend.name}
            </Card.Header>       
            <Card.Description>
              {friend.interests}
            </Card.Description>
          </Card.Content>
        </Card> */}
      </div>
    );
    }
  }
  

export default Home;
