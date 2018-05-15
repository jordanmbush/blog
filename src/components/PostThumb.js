import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import '../styles/post.css';

const PostThumb = ({id, title, body, author, imgUrl}) => {

  const bodyPreview = body.length > 30 ? body.substring(0,29) + '...' : body;
  const titlePreview = title.length > 15 ? title.substring(0,14) + '...' : title;

  return (
    <Link to={`/post?id=${id}`} className='route-link post-card-link'>
      <div className='post-card flex-clm flex-between'>
        <div className='thumbnail-container'><img src={imgUrl} alt='thumbnail' /></div>
        <div className='author-container'><span className='author'>{author}</span></div>
        <div className='title-container flex-clm flex-center'><h1>{titlePreview}</h1></div>
        <div><p>{bodyPreview}</p></div>
      </div>
    </Link>
  );
}

PostThumb.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string,
  imgUrl: PropTypes.string
}

// Pass to Loader, and check for 'user' prop before rendering
export default Loader(['author'])(PostThumb);