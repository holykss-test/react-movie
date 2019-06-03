import React from 'react';
import {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

    state = {
        greeting: "Hello Movie",
    }

    componentWillMount() {
        console.log('will mount')
    }

    componentDidMount() {
        this._getMovies();
    }

    _getMovies = async () => {
        const movies = await this._callApi()
        this.setState({
            movies: movies
        })
    }

    _callApi = () => {
        return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
            .then(response => response.json())
            .then(json => {
                    console.log(json.data)
                    return json.data.movies
                }
            )
            .catch(err => console.log(err))
    }

    _renderMovies = () => {
        return this.state.movies.map(movie => {
            console.log(movie)
            return <Movie title={movie.title_english}
                          image={movie.medium_cover_image}
                          key={movie.id}
                          genres={movie.genres}
                          synopsis={movie.synopsis}

            />
        })
    }

    render() {

        const movies = this.state.movies;

        return (
            <div className={movies ? "App" : "App--Loading..."}>
                {movies ? this._renderMovies() : "Loading..."}
            </div>
        );
    }

}


export default App;
