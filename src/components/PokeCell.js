import React from 'react';
import PropTypes from 'prop-types';
import sprites from '../assets/sprites.png';
import './styles/PokeCell.css';

const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

  return <button type="button" onClick={() => handleOnClick(id)} style={style} className="poke-cell" />;
};

PokeCell.propTypes = {
  pokeClass: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default PokeCell;
