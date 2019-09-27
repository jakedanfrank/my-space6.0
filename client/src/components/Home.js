import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Header, Image, Card, Button, Icon, } from "semantic-ui-react";

class Home extends React.Component {
  state = { friends: [], };

  componentDidMount() {
    axios.get("/api/friends")
    .then( response => this.setState({ friends: response.data, }))
  }

  sample = () => {
    const { friends, } = this.state;
    if (friends.length) {
      const index = Math.floor(Math.random() * friends.length);
      return friends[index];
    } else {
      return null;
    }
  }

  declineFriend = (id) => {
    const { friends, } = this.state;
    this.setState({ friends: friends.filter( f => f.id !==id),});
  }

  addFriend = (id) => {
    const {friends,} = this.state;
    axios.put(`/api/friends/${id}`)
    .then( () => this.setState({ friends: friends.filter( f => f.id !== id),}))
  }

  render() {
    const friend = this.sample();
    
    if (friend) {
      return(
        <div>
          <br />
          <br />
          <Card key={friend.id} >
            <Image src={friend.avatar} style={{backgroundColor: "lightblue", height: "350px", width: "300px"}}/>
            <Card.Content style={{backgroundColor: "#ffffe0"}}>
              <Card.Header  style={{color: "red"}}>
                { friend.name }
              </Card.Header>
              <Card.Description >
                { friend.location }
              </Card.Description>
              <hr />
              <Card.Meta >
                { friend.interests }
              </Card.Meta>
            </Card.Content>
            <Card.Content extra style={{backgroundColor: "#fffff0"}}>
              <Button color="red" icon basic onClick={() => this.declineFriend(friend.id)}>
                <Icon name="minus" />
              </Button>
              <Button color="green" icon basic onClick={() => this.addFriend(friend.id)}>
                <Icon name="plus" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/my_friends">
            <Button color="blue">
              My Friends
            </Button>
          </Link>
        </div>
      )
      } else {
        return <Header textAlign="center">No More Friends</Header>
      };
    };
  };
  
  
export default Home;


