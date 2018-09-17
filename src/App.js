import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    pastClickId: "",
    animateClass: "wrapper"
  };

  // removeFriend = id => {

  //   const friends = this.state.friends.filter(friend => friend.id !== id);

  //   this.setState({ friends });
  // };

  shuffleMix = friend => {
    const array = this.state.friends;
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    let animateClass = "wrapper";
    this.setState({ animateClass });
    const pastClickId = friend.id;
    this.setState({ array });
    this.setState({ pastClickId });
    if (friend.id !== this.state.pastClickId) {
      let score = this.state.score + 1;
      this.setState({ score });
    } else {
      console.log("game over");
      let animateClass = "wrapper animated shake";
      this.setState({ animateClass });
      if (this.state.score > this.state.topScore) {
        let topScore = this.state.score;
        this.setState({ topScore });
      }

      let score = 0;
      this.setState({ score });
    }
  };

  render() {
    return (
      <Wrapper animateClass={this.state.animateClass}>
        <Title
          score={this.state.score}
          topscore={this.state.topScore}
          pastClickId={this.state.pastClickId}
        >
          Clicky Game
        </Title>
        {/* {this.shuffleArray(this.state.friends)} */}
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleMix={this.shuffleMix}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
