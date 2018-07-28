import React, { Component } from "react";
import { Container } from "reactstrap";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
import Pokemon from "../Pokemon";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { pokemon } = this.state;
    return (
      <Container className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={pokemon} />
      </Container>
    );
  }
}

export default App;
