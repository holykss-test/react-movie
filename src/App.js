import React from 'react';
import {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
    greeting:"Hello Movie",
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then(response=>response.json())
    .then(json=>console.log(json))
    .catch(err=>console.log(err))

    setTimeout(()=>{
      this.setState({
        movies:[
          { 
            title:"A",
            image:"http://image.tvdaily.co.kr/upimages/gisaimg/201904/081448396.jpg"
          },
          { 
            title:"B",
            image:"http://image.tvdaily.co.kr/upimages/gisaimg/201904/081448396.jpg"
          },
              { 
            title:"C",
            image:"http://image.tvdaily.co.kr/upimages/gisaimg/201904/081448396.jpg"
          }
            ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    return this.state.movies.map((movie, index)=> {
      return <Movie title={movie.title} image={movie.image} key={index}/>
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
        
      </div>
    );
  }
  
}

// function App() {
//   return (
//     <div className="App">
//       {movies.map((movie, index)=> {
//         return <Movie title={movie.title} image={movie.image} key={index}/>
//       })}
//     </div>
//   );
// }

export default App;
