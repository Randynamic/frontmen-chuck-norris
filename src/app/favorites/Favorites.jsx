import React        from 'react';
import {connect}    from 'react-redux';
import * as actions from './favorites-actions';
import Footer       from 'components/footer/Footer';

import '../joke-list/joke-list.scss';

const Favorites = ({ favorites, removeFavorite, addRandomFavorites }) => {
  return (
    <div className="joke-list-container">
      <div className="joke-list">
        {favorites.map(joke =>
            <div key={joke.id} className="joke-list__joke">
              <div className="joke-list__joke-text">
                {joke.text}            
              </div>
              <i className="fas fa-trash-alt"
                onClick={() => removeFavorite(joke.id)}>
              </i>
            </div>
        )}
      </div>
      <Footer
        isDisabled={favorites.length >= 10}
        buttonText="Add random favorites"
        buttonIcon="fas fa-plus"
        buttonAction={addRandomFavorites}
      />
    </div>
  );
};

export default connect(
  state => ({ favorites: state.favorites }),
  actions
)(Favorites);