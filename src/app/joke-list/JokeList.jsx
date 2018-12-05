import React        from 'react';
import {connect}    from 'react-redux';
import * as actions from './joke-list-actions';

import './joke-list.scss';

class JokeList extends React.Component {

  componentDidMount() {
    this.props.fetchJokes();
  }

  render() {
    return (
      <div className="joke-list">
        {this.props.jokes.map(joke =>
          <div key={joke.id} className="joke-list__item">
                {joke.text}
          </div>
        )}
      </div>
    );
  }
}

export default connect(state => state.jokes, actions)(JokeList);