import React, { Component, Fragment } from "react";
import PostThumb from "./PostThumb";
import NavigatePosts from './navigatePosts';
import PropTypes, { object } from "prop-types";

class PostThumbsContainer extends Component {
  state = {
    firstPostIndex: 0,
  }

  onNextClick = () => {
    const firstPostIndex = this.state.firstPostIndex;
    this.setState({ firstPostIndex: firstPostIndex + 10 })
  }
  onPreviousClick = () => {
    const firstPostIndex = this.state.firstPostIndex;
    this.setState({ firstPostIndex: firstPostIndex - 10 })
  }

  render() {
    const firstPostIndex = this.state.firstPostIndex;
    const currentPagePosts = this.props.posts
      .slice()
      .splice(firstPostIndex, 10);
      
    const posts = currentPagePosts.map((postInfo, i) => {
      const author = this.props.users.find(user => user.id === postInfo.userId);
      const img = this.props.photos.find(photo => photo.albumId === postInfo.userId);
      return <PostThumb
        id={postInfo.id} 
        key={"post-" + postInfo.id} 
        title={postInfo.title} 
        body={postInfo.body} 
        author={author && author.name} 
        imgUrl={img && img.thumbnailUrl}
      />;
    });
    return (
      <Fragment>
        <div className="posts-container view-content flex-row flex-around">
          {posts}
        </div>
        <NavigatePosts 
          nextDisabled={this.state.firstPostIndex >= this.props.posts.length - 10}
          previousDisabled={this.state.firstPostIndex === 0}
          onNextClick={this.onNextClick}
          onPreviousClick={this.onPreviousClick}
        
        />
      </Fragment>
    ); 
  }
}

PostThumbsContainer.propTypes = {
  posts: PropTypes.arrayOf(object).isRequired,
  users: PropTypes.arrayOf(object).isRequired,
  albums: PropTypes.arrayOf(object).isRequired,
  photos: PropTypes.arrayOf(object).isRequired,
};

export default PostThumbsContainer;
