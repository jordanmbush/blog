import React, { Component } from 'react';
import '../styles/new-comment.css';
import Button from './submitButton';

class NewComment extends Component {
  state = {
    title: '',
    body: '',
  }

  handleChange = (target) => {
    this.setState({ [target.name]: target.value });
  }
  
  postComment = () => {
    this.props.postComment(this.state.title, this.state.body);
    this.setState({ title: '', body: '' })
  }

  render() {
    return <div className="new-comment-container comment-container flex-row">
        <div className="profile-icon-container">
          <i className="fas fa-user-circle" />
        </div>
        <div className="new-comment-data-container flex-clm">
          <div className="comment-title flex-row">
            <input name="title" value={this.state.title} onChange={e => this.handleChange(e.currentTarget)} placeholder="Enter a title..." />
          </div>
          <div className="comment-body flex-row">
            <textarea name="body" value={this.state.body} onChange={e => this.handleChange(e.currentTarget)} placeholder="Enter a comment..." />
          </div>
          <div className="post-comment-container">
            {/* <button disabled={!this.state.body || !this.state.title} onClick={this.postComment}>
              Post Comment
            </button> */}
            <Button disabled={!this.state.body || !this.state.title} onClick={this.postComment} btnText='Post Comment'/>
          </div>
        </div>
      </div>;
  }
};


export default NewComment;