import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";
import cards from "./cards.json";
import './App.css';
//sets state to 0 or empty
class App extends Component {
  state = {
    cards,
    clickedCard: [], 
    score: 0,
    topscore: 0
  };

  //when you click on a card its taken out of the array
  imageClick = event => {
    const currentCard = event.target.alt;
    const CardAlreadyClicked = this.state.clickedCard.indexOf(currentCard) > -1;

  //if you click on a card that has already been selected, the game is reset and cards reordered
    if (CardAlreadyClicked) {
      this.setState({
        card: this.state.cards.sort(function(a,b) {
          return 0.5 - Math.random();
        }),
        clickedCard: [], 
        score: 0
      });
      alert("You lose. Play again?");

  //if you click on an available card you score is increased and cards reordered  
    } else {
      this.setState (
        {
          card: this.state.cards.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCard: this.state.clickedCard.concat(
            currentCard
          ),
          score: this.state.score + 1,
          topscore: this.state.score + 1 > this.state.topscore ? this.state.score + 1: this.state.topscore
        },
  // if you get all 12 cards correct you get a congrats message and the game resets
      () => {
        if (this.state.score === 12) {
          alert("YOU WIN!");
          this.setState({
            card: this.state.cards.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedCard: [],
            score: 0
          });
         }
       }      
      );
    }
  };

  //the order of components to be rendered: navbar, jumbotron, card, footer
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topscore={this.state.topscore}
        />
        <Jumbotron />
        <div className = "wrapper">
          {this.state.cards.map(card => (
            <Card 
              imageClick = {this.imageClick}
              id={card.id}
              key={card.id}
              image={card.image}
              />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
