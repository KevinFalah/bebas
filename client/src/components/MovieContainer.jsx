import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieList from './MovieList'
import dataMovies from '../dataDummy/DataFakeMovies'
import { UserContext } from '../context/UserContext';
import { useQuery } from 'react-query';
import {API} from '../config/api'

function MovieContainer() {

  let { data: products } = useQuery('moviesCache', async () => {
    const response = await API.get('/products');
    console.log(response)
    return response.data.data;
  });

  console.log(products);


  return (
    <div >
      <Container className="my-5 overflow-hidden" id="" >
        <h3 className="text-light">Movies</h3>
        <Row>
          {dataMovies.map((movies, index) => {
            return(
              <Col md={2} key={index}>
                  <MovieList 
                    movieImg={movies.movieImg}
                    title={movies.title}
                    year={movies.year}
                  />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default MovieContainer;
