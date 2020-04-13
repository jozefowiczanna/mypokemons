import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import { Container, Row } from 'react-bootstrap';


export default function PokemonList({ pokemonData }) {
  return (
    <Container>
      <Row>
      {pokemonData.map(pokemon => (
        <PokemonCard 
          key={pokemon.name}
          pokemon={pokemon}
        />
      ))}
      </Row>
    </Container>
  )
}
