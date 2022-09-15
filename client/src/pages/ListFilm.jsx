import React, { useState } from 'react'
import MovieContainer from '../components/MovieContainer'
import SeriesContainer from '../components/SeriesContainer'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListFilm() {

  const [category, setCategory] = useState("TV Series")


  console.log(category)
  return (
    <>
    <div className='d-flex mt-4 mx-5 px-5 justify-content-between'>
      <div className='d-flex gap-4'>
        <h4 className='text-white'>List Film</h4>
        <select value={category} onChange={(e) => setCategory(() => e.target.value)} className='bg-black text-white' name="list" id="list">
          <option disabled selected >Category</option>
          <option>TV Series</option>
          <option>Movie</option>
        </select>
      </div>
      <div>
        <Button className="btn bg-danger text-white border-0 px-5" as={Link} to='/add-film'>Add Film</Button>
      </div>
    </div>
    
    <div className='sectionSeries'>
      {category == "TV Series" ? 
      ( <SeriesContainer /> ):(<MovieContainer />)}
    </div>
      
    </>
  )
}

export default ListFilm