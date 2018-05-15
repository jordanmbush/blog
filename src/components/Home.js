import React, { Component } from 'react';
import PostThumbsContainer from './PostThumbsContainer';
import { connect } from 'react-redux';


class Home extends Component {
  render() {
    return (
      <div className='view-container' >
        <PostThumbsContainer {...this.props} />
      </div>
    )
  };
}

const mapStateToProps = state => { 
  return {
    posts: state.posts,
    users: state.users,
    albums: state.albums,
    photos: state.photos
  }
}

export default connect(mapStateToProps)(Home);