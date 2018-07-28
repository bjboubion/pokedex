import React from "react";
import PropTypes from "prop-types";
import "./styles/DetailView.css";
import { Container, Row, Col } from "reactstrap";

const DetailView = ({ pokemon }) => {
  const { name, sprite, type } = pokemon;

  return (
    <Container className="container">
      <Row sm="12" xs="6" className="detail-view">
        <img src={sprite} className="sprite-image" alt="sprite" />
        <div className="data-wrapper">
          <h3 className="data-name">Name: {name}</h3>
          <h3 className="data-char">Type: {type} </h3>
        </div>
      </Row>
    </Container>
  );
};

DetailView.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default DetailView;
