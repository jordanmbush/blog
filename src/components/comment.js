import React from 'react';
import Loader from './Loader';
import '../styles/comment.css';

const Comment = ({comment}) => {
  return (
    <div className='comment-container flex-row'>
      <div className='profile-icon-container'><i className="fas fa-user-circle"></i></div>
      <div className='comment-data-container'>
        <div className='comment-name flex-row'>{comment.name}</div>
        <div className='comment-email flex-row'>{comment.email}</div>
        <div className='comment-body flex-row'>{comment.body}</div>
      </div>
    </div>
  )
}

export default Loader(['comment'])(Comment);