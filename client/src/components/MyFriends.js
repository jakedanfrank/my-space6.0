import React from "react";
import axios from "axios";
import { Card, Divider, Image, } from "semantic-ui-react";

class MyFriends extends React.Component {
  state = { friends: [], };

  componentDidMount() {
    axios.get("api/my_friends")
    .then( response => this.setState({ friends: response.data,}));
  }

  render() {
    const { friends, } = this.state;
    return(
      <Card.Group itemsPerRow={4}>
        { friends.map( friend => 
          <Card key={friend.id} >

            <Image src={friend.avatar} style={{backgroundColor: "lightblue", height: "350px", width: "300px"}} />
            <Card.Content>
              <Divider />
              <Card.Header style={{color: "red"}}>
                { friend.name }
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    )
  }
}

export default MyFriends;