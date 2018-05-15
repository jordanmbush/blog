import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getInitialData } from '../../redux/reducer';
import Header from '../Header';
import AuthorMap from '../map';
import { getQueryObj } from '../helper';
import '../../styles/author-page.css';

class AuthorContainer extends Component {
  state = {
    id: null
  }
  
  componentDidMount() {
    // Fake persist redux through refresh
    if(!(this.props.posts.length && this.props.users.length && this.props.albums.length && this.props.photos.length))
      this.props.getInitialData();

    const queries = getQueryObj(this.props.location.search);
    this.setState({ id: parseInt(queries.id, 10) });
  }

  render() {
    const author = this.state.id ? this.props.users.find( user => user.id === this.state.id) : null;
    const geo = this.state.id && author ? author.address.geo : null;
    const {street, suite, city, zipcode} = author ? author.address : {};
    if(geo) geo.lat = parseFloat(geo.lat, 10);
    if(geo) geo.lng = parseFloat(geo.lng, 10) ;

    return (
      <Fragment>
        <Header />
        <div className='view-container flex-clm'>
          <div className='flex-clm author-section'>
            <h1>User Info</h1>
            <div className='flex-clm autho-info-container'>
              <div className='flex-row'>
                <span className='author-label'>Name:</span>
                <span className='author-info'>{author && author.name}</span>
              </div>
              <div className='flex-row'>
                <span className='author-label'>UserName:</span>
                <span className='author-info'>{author && author.username}</span>
              </div>
              <div className='flex-row'>
                <span className='author-label'>Phone:</span>
                <span className='author-info'>{author && author.phone}</span>
              </div>
              <div className='flex-row'>
                <span className='author-label'>Website:</span>
                <span className='author-info'>{author && author.website}</span>
              </div>
            </div>
          </div>
          <div className='flex-clm author-section'>
            <h1>Company Info</h1>
            <div className='flex-row'>
              <span className='author-label'>Name:</span>
              <span className='author-info'>{author && author.company.name}</span>
            </div>
            <div className='flex-row'>
              <span className='author-label'>Catch-Phrase:</span>
              <span className='author-info'>{author && author.company.catchPhrase}</span>
            </div>
            <div className='flex-row'>
              <span className='author-label'>Strategy:</span>
              <span className='author-info'>{author && author.company.bs}</span>
            </div>
          </div>
          <div className='flex-clm author-section'>
            <h1>Address Info</h1>
            <div className='flex-row'>
              <span className='author-label'>Address:</span>
              <span className='author-info'>{author && `${street} ${suite}, ${city} ${zipcode}`}</span>
            </div>
          </div>
          {author && geo && <AuthorMap center={geo} author={author}/>}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthorContainer);