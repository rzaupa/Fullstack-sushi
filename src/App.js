import React, { Component } from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";

import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {
  state = {
    cards: [
      { id: 0, nome: "California", prezzo: 1.99, immagine: california },
      { id: 1, nome: "dragon", prezzo: 1.99, immagine: dragon },
      { id: 2, nome: "dynamite", prezzo: 1.99, immagine: dynamite },
      { id: 3, nome: "philadelphia", prezzo: 1.99, immagine: philadelphia },
      { id: 4, nome: "rainbow", prezzo: 1.99, immagine: rainbow },
      { id: 5, nome: "shrimp", prezzo: 1.99, immagine: shrimp }
    ]
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className="row">
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                card={card}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
