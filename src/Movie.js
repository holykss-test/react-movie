import React, {Component} from 'react';
import "./Movie.css";
import PropTypes from 'prop-types'

class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster image={this.props.image}/>
            </div>
        )
    }
}

class MoviePoster extends Component {
    static propTypes = {
        image: PropTypes.string.isRequired
    };

    render() {
        return <img width="100" height="auto" src={this.props.image} />
    }
}

export default Movie;