import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import PokeCell from "./PokeCell";
import pokeClasses from "../pokeClasses";
import "./styles/PokeList.css";

const PokeList = ({ handleOnClick }) => {
  const cells = pokeClasses.map(pokeClass => (
    <PokeCell
      key={pokeClass.id}
      pokeClass={pokeClass}
      handleOnClick={handleOnClick}
    />
  ));
  return (
    <Container className="Container">
      <Row className="poke-list">{cells}</Row>
    </Container>
  );
};

PokeList.propTypes = {
  handleOnClick: PropTypes.func.isRequired
};

export default PokeList;
