import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({author}) => {
  const style = {
    backgroundColor: '#659dbd',
    height: '65px',
    width: '65px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white'
  }
  return (
    <div style={style}>{author.name}</div>
  )
}

class AuthorMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.332111,
      lng: -0.267180
    },
    zoom: 0
  };


  render() {
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '400px', marginBottom: '30px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBR5KEu7FZNN23G7mSJhUqemZ8Z53PBeAI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            author={this.props.author}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default AuthorMap;