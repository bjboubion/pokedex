import React from "react";
import PropTypes from "prop-types";
import "./styles/DetailView.css";
import { Container, Row, Col } from "reactstrap";

const DetailView = ({ pokemon }) => {
  const { name, sprite, type } = pokemon;

  return (
    <Container className="detail-view">
      <Row>
        <Col sm="12" xs="6">
          <img src={sprite} className="sprite-image" alt="sprite" />
        </Col>
      </Row>
      <Row>
        <Col sm="12" xs="6">
          <div className="data-wrapper">
            <h3 className="data-name">Name: {name}</h3>
            <h3 className="data-char">Type: {type} </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

DetailView.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default DetailView;
