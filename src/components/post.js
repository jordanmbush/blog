import React from 'react';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
  return (
    <div className='component-container flex-clm'>
      <div className='component-content flex-clm'>
        <div className='post-title-container inner-container'><h1 className='title'>{post.title}</h1></div>
        <div className='post-author'><h3 className='author'>by: <Link to={`/author?id=${post.author.id}`}>{post.author.name}</Link></h3></div>
        <div className='post-img-container inner-container'><img src={post.imgUrl} alt='post'/></div>
        <div className='post-body-container inner-container'>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  )
}

export default Loader(['post'])(Post);