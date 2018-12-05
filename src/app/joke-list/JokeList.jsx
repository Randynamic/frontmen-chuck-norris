import React        from 'react';
import {connect}    from 'react-redux';
import Footer       from 'components/footer/Footer';
import * as actions from './joke-list-actions';

import {addFavorite, removeFavorite} from '../favorites/favorites-actions';
import './joke-list.scss';

const JokeList = ({ jokes, favorites, removeFavorite, addFavorite, fetchJokes }) => {
  return (
    <div className="joke-list-container">
      <div className="joke-list">
        {jokes.jokes.map(joke => {
          const isFavorite = favorites.favorites.find(favorite => favorite.id === joke.id);
          const toggleFavorite = () => isFavorite
            ? removeFavorite(joke.id)
            : addFavorite(joke);

          return (
            <div key={joke.id} className="joke-list__joke is-clickable"
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
      <Footer
        buttonIcon="fas fa-sync-alt"
        buttonText="Refresh jokes"
        buttonAction={fetchJokes}
      />
    </div>
  );
};

export default connect(
  state => ({
    favorites: state.favorites,
    jokes: state.jokes
  }),
  {...actions, addFavorite, removeFavorite}
)(JokeList);