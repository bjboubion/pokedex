import React from 'react';
import PropTypes from 'prop-types';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const {
    id, name, sprite, type,
  } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className="sprite-image" alt="sprite" />
      <div className="data-wrapper">
        <h1 className="data-name">
          ID:
          {' '}
          {id}
          {' '}
          {name}
        </h1>
        <p className="data-char">
          Type:
          {' '}
          {type}
        </p>
      </div>
    </section>
  );
};

DetailView.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default DetailView;
