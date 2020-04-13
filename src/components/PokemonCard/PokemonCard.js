import React from 'react';
import { Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import './PokemonCard.css';
import { connect } from 'react-redux';

const StyledImg = styled.img`
  width: 120px;
  height: auto;
  display: block;
  margin: 10px auto 20px;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledListItem = styled.li`
`;

const StyledSpan = styled.span`
  font-weight: bold;
  display: inline-block;
  margin-right: 5px;
`;

const PokemonCard = ({activeFilter, filterValues, pokemon}) => {

  let name = pokemon['name'].toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join();
  let { stats } = pokemon;

  console.log(filterValues[activeFilter]);

  const getAllTypes = () => {
    let typesList = [];
    for(let i=0; i<pokemon.types.length; i++) {
      typesList.push(pokemon.types[i].type.name);
    }
    return typesList.join(", ");
  }

  const allTypes = getAllTypes();

  return (
    <Col lg={3} md={4} sm={6} className="mb-3">
      <Card id="pcard" className={(pokemon[activeFilter] > parseInt(filterValues[activeFilter])) ? "active" : ""}>
        <Card.Body className={"d-flex flex-column align-items-center"}>
          <Card.Title className={"text-center"}>{name}</Card.Title>
          <StyledImg src={pokemon.sprites.front_default} />
          <StyledList>
            <StyledListItem><StyledSpan>Id:</StyledSpan>{pokemon.id}</StyledListItem>
            <StyledListItem><StyledSpan>Types:</StyledSpan>{allTypes}</StyledListItem>
            <StyledListItem><StyledSpan>Height:</StyledSpan>{pokemon.height}</StyledListItem>
            <StyledListItem><StyledSpan>Weight:</StyledSpan>{pokemon.weight}</StyledListItem>
            <StyledListItem><StyledSpan>Speed:</StyledSpan>{stats[0]["base_stat"]}</StyledListItem>
            <StyledListItem><StyledSpan>Special defense:</StyledSpan>{stats[1]["base_stat"]}</StyledListItem>
            <StyledListItem><StyledSpan>Defense:</StyledSpan>{stats[2]["base_stat"]}</StyledListItem>
            <StyledListItem><StyledSpan>Attack:</StyledSpan>{stats[3]["base_stat"]}</StyledListItem>
            <StyledListItem><StyledSpan>HP:</StyledSpan>{stats[4]["base_stat"]}</StyledListItem>
          </StyledList>
        </Card.Body>
      </Card>
    </Col>
  )
}

// const mapStateToProps = ({heavy}) => ({filterHeavy});

const mapStateToProps = state => {
  return {
    activeFilter: state.activeFilter,
    filterValues: state.filterValues
  };
};

export default connect(mapStateToProps)(PokemonCard);