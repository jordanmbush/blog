import React, { Component, Fragment } from 'react';
import Header from '../Header';
import Comment from '../comment';
import NewComment from '../newComment';
import Post from '../post';
import { connect } from 'react-redux';
import { getQueryObj } from '../helper';
import { addData, getInitialData } from '../../redux/reducer';
import axios from 'axios';
import '../../styles/post-preview.css';

class PostPreviewPage extends Component {
  state = {
    id: null,
    comments: []
  }

  componentDidMount() {
    // Fake persist redux through refresh
    if(this.props.posts.length === 0)
      this.props.getInitialData().then( response => this.setState({comments: this.props.comments}));
    // GRAB THE QUERY PORTION OF THE URL, AND PUT THE DATA INTO AN OBJECT, WITH THE QUERY VARIABLES BEING THE PROPERTIES
    const queries = getQueryObj(this.props.location.search);
    this.setState({ 
      id: parseInt(queries.id, 10),
      comments: this.props.comments
    });

    window.scrollTo(0, 0);
  }

  getPostInfo = () => {
    const { posts, users, photos } = this.props;
    const post = posts.find( el => el.id === this.state.id);
    if(post) {
      const author = users.find(user => user.id === post.userId);
      const img = photos.find(photo => photo.albumId === post.userId);
      post.imgUrl = img.url;
      post.author = author
      return post;
    } else {
      return null;
    }
  }

  getComments = () => {
    const comments = this.state.comments
      .filter( comment => comment.postId === this.state.id)
      .sort( (a,b) => a.id < b.id) //SHOW NEWEST COMMENT FIRST
      .map( comment => <Comment key={comment.postId + '-' + comment.id} comment={comment} />)
    return comments;
  }

  postComment = (name, body) => {
    const newComment = { name, body, email: "anonymous@anonymous.com", postId: this.state.id };
    const comments = this.props.comments;
    axios.post(`https://jsonplaceholder.typicode.com/comments`, newComment).then( response => {
      comments.unshift(response.data);

      this.props.addData(comments, 'comments');

      this.setState({ comments });

    }).catch(err => console.log('postComment err: ', err));
  }

  render() {
    const post = this.getPostInfo();
    const comments = this.getComments();
    return (
      <Fragment>
        <Header />
        <div className='view-container'>
          <div className='view-content'>
              <Post post={post}/>
              <div className='comments-container flex-clm'>
                <h1>Comments:</h1>
                <NewComment postComment={this.postComment}/>
                {comments}
              </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    users: state.users,
    comments: state.comments,
    photos: state.photos
  }
}
const mapDispatchToProps = {
  getInitialData,
  addData
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPreviewPage);