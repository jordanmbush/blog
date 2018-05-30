import React, { Component, Fragment } from 'react';
import Header from '../Header';
import Button from '../submitButton';
import { connect } from 'react-redux';
import { addData, getInitialData } from '../../redux/reducer';
import axios from 'axios';
import '../../styles/create-post.css';

const SUCCESS = 'success';
const WAITING = 'waiting';

class CreatePostPage extends Component {
  state = {
    title: '',
    body: '',
    userId: 1,
    notification: WAITING,
  }

  componentDidMount() {
    if(this.props.posts.length === 0) this.props.getInitialData();
  }
  
  handleChange = target => {
    console.log('target: ', target);
    this.setState({ [target.name]: target.value });
  }

  submitPost = () => {
    const { title, body, userId } = this.state;
    const newPost = { title, body, userId };

    axios.post(`https://jsonplaceholder.typicode.com/posts`, newPost).then( response => {
      const posts = this.props.posts;
      posts.push(response.data);

      this.props.addData(posts, 'posts');
      this.setState({
        title: '',
        body: '',
        notification: SUCCESS,
      })
    }).catch(err => console.log('submitPost err: ', err));
  }

  closeNotification = () => {
    this.setState({ notification: WAITING })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className='new-post-container view-container flex-clm pos-rel'>
          <div className='new-post-section flex-clm'>
            <h1>Add a Title</h1>
            <textarea className='post-title' name='title' value={this.state.title} onChange={ e => this.handleChange(e.currentTarget)} />
          </div>
          <div className='new-post-section flex-clm'>
            <h1>Write your post here:</h1>
            <textarea className='post-body' name='body' value={this.state.body} onChange={ e => this.handleChange(e.currentTarget)} />
          </div>
          <Button disabled={!(this.state.title && this.state.body)} onClick={this.submitPost} btnText='Create Post'/>
          <div className={`notification pos-abs ${this.state.notification}`}>
            <button className='close pos-abs' onClick={this.closeNotification}>X</button>
            <span>Successfully Posted!</span>
          </div>
        </div>
      </Fragment>
    )
  }
};


const mapStateToProps = state => {
  return {
    posts: state.posts
  }  
}

const mapDispatchToProps = {
  addData,
  getInitialData
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostPage);