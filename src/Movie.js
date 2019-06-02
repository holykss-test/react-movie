import React, {Component} from 'react';
import "./Movie.css";
import PropTypes from 'prop-types'

function Movie({title, image}, props) {
    return (
        <div>
        <MoviePoster image={image}/>
        <h1>{title}</h1>
    </div>
)
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};


function MoviePoster({image}, props) {
    return (
            <img width="100" height="auto" src={image} />
    )
}

MoviePoster.propTypes = {
    image:PropTypes.string.isRequired
}
export default Movie;