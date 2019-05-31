import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  { 
    title:"A",
    image:"http://image.tvdaily.co.kr/upimages/gisaimg/201904/081448396.jpg"
  },
  { 
    title:"B",
    image:"http://image.tvdaily.co.kr/upimages/gisaimg/201904/081448396.jpg"
  }
];


function App() {
  return (
    <div className="App">
      {movies.map((movie, index)=> {
        return <Movie title={movie.title} image={movie.image} key={index}/>
      })}
    </div>
  );
}

export default App;
