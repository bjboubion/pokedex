import React from 'react';
import PropTypes from 'prop-types';
import PokeCell from './PokeCell';
import pokeClasses from '../pokeClasses';
import './styles/PokeList.css';

const PokeList = ({ handleOnClick }) => {
  const cells = pokeClasses.map(pokeClass => (
    <PokeCell
      key={pokeClass.id}
      pokeClass={pokeClass}
      handleOnClick={handleOnClick}
    />
  ));
  return (
    <section className="poke-list">
      {cells}
    </section>
  );
};

PokeList.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default PokeList;
