// import React from 'react'
// import styles from './Movie.module.css'

// const Movie = (props) => {
//     const { title, date, image} = props
//   return (
//     <div className={styles.movie}>
//     <img 
//     className={styles.movies__image}
//     src="{image}"
//     alt=""/>
//     <h3 className={styles.movies__tittle}>{title}</h3>
//     <p className={styles.movies__date}>{date}</p>
//     </div>
//   )
// }
// Movie.js

import React from 'react';
import PropTypes from 'prop-types';

function Movie({ title, date, image }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{date}</p>
      <img src={image} alt={title} style={{ maxWidth: '100%' }} />
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};




export default Movie;