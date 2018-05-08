import React, { Component } from 'react';


const Loader = (propName) => (WrappedComponent) => {
  return class Loader extends Component {

    //CHECKS PRIMATIVE TYPES, AND REFERENCE TYPES ARRAY AND OBJECT
    isEmpty(prop) {
      prop === null ||
      prop === undefined ||
      (prop.hasOwnProperty('length') && prop.length === 0) || //Empty Array
      (prop.constructor === Object && Object.keys(prop).length === 0) // Empty Object
    }
    
    render() {
      return this.isEmpty(this.props[propName]) ? <div className='loader'></div> : <WrappedComponent {...this.props} />
    }
  }  
}

export default Loader;