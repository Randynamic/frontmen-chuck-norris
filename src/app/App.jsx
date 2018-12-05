import React        from 'React';
import {connect}    from 'react-redux';
import JokeList     from './joke-list/JokeList';
import Favorites    from './favorites/Favorites';
import * as actions from './app-actions';
import {fetchFavorites} from './favorites/favorites-actions';
import {fetchJokes} from './joke-list/joke-list-actions';

import './app.scss';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchFavorites();
    this.props.fetchJokes();
  }

  render() {

    const {activeTab, setActiveTab} = this.props;

    const buttonProps = {
      activeTab,
      setActiveTab
    };

    return (
      <div className="app">
        <div className="app-header">
          <img src="/images/chuck.png" alt=""/>
        </div>
        <div className="app-body">
          <div className="app-body__buttons">
            <Button
              {...buttonProps}
              tabId="joke-list"
              title="New jokes"
              icon="fas fa-list-ul"
            />
            <Button
              {...buttonProps}
              tabId="favourites"
              title="Favourites"
              icon="fas fa-star"
            />
          </div>
          {activeTab === 'joke-list'
            ? <JokeList/>
            : <Favorites/>
          }
        </div>
      </div>
    );
  }
}

const Button = ({ tabId, title, icon, setActiveTab, activeTab }) => {
  const isActive = tabId === activeTab ? 'is-active' : '';

  return (
    <button className={`app-body__button ${isActive}`}
      onClick={() => setActiveTab(tabId)}>
      <i className={icon}></i>
      {title}
    </button>
    );
};

export default connect(
  state => state.app,
  {...actions, fetchFavorites, fetchJokes}
)(App);