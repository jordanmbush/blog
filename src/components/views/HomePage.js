import React, { Component, Fragment } from 'react';
import Home from '../Home';
import { connect } from 'react-redux';
import { getInitialData } from '../../redux/reducer';
import Header from '../Header';

class HomeContainer extends Component {
  componentDidMount() {
    // Fake persist redux through refresh
    if(!(this.props.posts.length && this.props.users.length && this.props.albums.length && this.props.photos.length))
      this.props.getInitialData();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments,
    albums: state.albums,
    photos: state.photos,
    todos: state.todos,
    users: state.users
  };
};

const mapDispatchToProps = {
  getInitialData
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);