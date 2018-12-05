import React        from 'react';
import {connect}    from 'react-redux';
import * as actions from './favorites-actions';
import Footer       from 'components/footer/Footer';

import '../joke-list/joke-list.scss';

class Favorites extends React.Component {

  componentDidUpdate() {
    const {favorites} = this.props;
    if (favorites.isAdding && !favorites.timer) {
      this.listBottom.scrollIntoView({ behavior: "smooth" });
    }
  }

  render() {
    const {
      favorites, removeFavorite, addRandomFavorites, stopAddingRandomFavorites
    } = this.props;

    return (
      <div className="joke-list-container">
        <div className="joke-list"
          ref={el => this.list = el}>
          {favorites.favorites.map(joke =>
              <div key={joke.id} className="joke-list__joke">
                <div className="joke-list__joke-text">
                  {joke.text}            
                </div>
                <i className="fas fa-trash-alt"
                  onClick={() => removeFavorite(joke.id)}>
                </i>
              </div>
          )}
          <div className="joke-list__bottom"
            ref={el => this.listBottom = el}>
          </div>
        </div>
        <Footer
          isDisabled={favorites.favorites.length >= 10}
          timer={favorites.timer}
          buttonClass={favorites.isAdding ? 'is-red' : ''}
          buttonText={favorites.isAdding ? "Stop adding random favorites" : "Add random favorites"}
          buttonIcon={favorites.isAdding ? "fas fa-stop" : "fas fa-plus"}
          buttonAction={favorites.isAdding ? stopAddingRandomFavorites : addRandomFavorites}
        />
      </div>
    );
  }
};

export default connect(
  state => ({ favorites: state.favorites }),
  actions
)(Favorites);