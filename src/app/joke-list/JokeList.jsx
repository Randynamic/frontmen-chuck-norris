import React        from 'react';
import {connect}    from 'react-redux';

import {addFavorite, removeFavorite} from '../favorites/favorites-actions';
import './joke-list.scss';

const JokeList = ({ jokes, favorites, removeFavorite, addFavorite }) => {
  return (
    <div className="joke-list">
      {jokes.jokes.map(joke => {
        const isFavorite = favorites.find(favorite => favorite.id === joke.id);
        const toggleFavorite = () => isFavorite
          ? removeFavorite(joke.id)
          : addFavorite(joke);

        return (
          <div key={joke.id} className="joke-list__joke"
            onClick={toggleFavorite}>
            <div className="joke-list__joke-text">
              {joke.text}            
            </div>
            <i className={`${isFavorite ? 'fas' : 'far'} fa-star`}>
            </i>
          </div>
        );
      })}
    </div>
  );
};

export default connect(
  state => ({
    favorites: state.favorites,
    jokes: state.jokes
  }),
  {addFavorite, removeFavorite}
)(JokeList);