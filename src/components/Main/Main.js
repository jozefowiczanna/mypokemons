import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import './Main.css';
import Nav from '../Nav/Nav';
import Pagination from '../Pagination/Pagination';
import PokemonList from '../PokemonList/PokemonList';

const StyledLoader = styled.div`
  text-align: center;
  margin: 50px;
  font-size: 25px;
`;

function Main() {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemonData, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(url);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  function getPokemon(url) {
    return new Promise((resolve) => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          resolve(data)
        })
    })
  }
  
  useEffect(() => {
    setLoading(true);
    let cancel;

    const loadingPokemon = async (data) => {
      let _pokemonData = await Promise.all(
        data.map(async pokemon => {
          let pokemonRecord = await getPokemon(pokemon.url);
          return pokemonRecord;
      }))
      setPokemon(_pokemonData);
    }
    
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      // prevent auto switching limit to 4 when reaching end of the list
      (res.data.next === null) ? setPrevPageUrl(url + "?offset=940&limit=20") : setPrevPageUrl(res.data.previous);
      loadingPokemon(res.data.results);
    });

    return () => cancel();
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <>
      <Nav />
      {loading ? <StyledLoader>Loading...</StyledLoader> : (
        <Container className="cnt">
          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          />
          <PokemonList pokemonData={pokemonData} />
          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          />
        </Container>
      )}
    </>
  );
}

export default Main;
