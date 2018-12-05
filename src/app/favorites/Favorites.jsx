import React        from 'react';
import {connect}    from 'react-redux';
import * as actions from './favorites-actions';

import '../joke-list/joke-list.scss';

const Favorites = ({ favorites, removeFavorite }) => {
  return (
  <div className="joke-list">
    {favorites.map(joke =>
        <div key={joke.id} className="joke-list__joke"
          onClick={() => removeFavorite(joke.id)}>
          <div className="joke-list__joke-text">
            {joke.text}            
          </div>
          <i className="fas fa-trash-alt"></i>
        </div>
    )}
  </div>
  );
};

export default connect(
  state => ({ favorites: state.favorites }),
  actions
)(Favorites);