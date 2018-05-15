import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = { navClass: '' }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    window.pageYOffset >= 91 ? this.setState({navClass: 'pos-fxd'}) : this.setState({ navClass: ''});
  }

  render() {
    return(
      <div className='component-container main-header-container flex-clm'>
        <div className='main-header-bar flex-row flex-between pos-rel'>
          <div className='logo-container flex-row flex-center'><span>BlogPost</span></div>
          <nav className='header-nav flex-row pos-fxd'>
            <Link to='/'>
              <h2>Home</h2>
            </Link>
            <Link to='/new-post'>
              <h2>Create Post</h2>
            </Link>
          </nav>
        </div>
        <div className={`sub-header-bar flex-row flex-start flex-between ${this.state.navClass}`}>
          <div className='mini-logo-container flex-row'><span>BlogPost</span></div>
        </div>
      </div>
    )
  }
}

export default Header;