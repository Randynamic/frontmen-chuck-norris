import React from 'React';
import JokeList from './joke-list/JokeList';

import './app.scss';

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <img src="/images/chuck.png" alt=""/>
      </div>
      <div className="app-body">
      <div className="app-body__buttons">
          <button className="app-body__button is-active">
          <i className="fas fa-list-ul"></i>
          Joke list
          </button>
          <button className="app-body__button">
          <i className="fas fa-heart"></i>
          Favorites
          </button>
        </div>
        <JokeList/>
      </div>
    </div>
  );
};

export default App;