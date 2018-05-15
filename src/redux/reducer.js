import axios from 'axios';

var initialState = {
  posts: [],
  comments: [],
  albums: [],
  photos: [],
  todos: [],
  users: [],
};

const ADD_DATA = 'ADD_DATA';
const GET_DATA = 'GET_DATA';

export default function(state=initialState, action){
  switch(action.type){
    case ADD_DATA:
      return {...state, [action.payload.prop]: action.payload.data}
    case GET_DATA + '_FULFILLED':
      return action.payload;
    default:
      return state;
    }
}

export const addData = (data, prop) => {
  return {
    type: ADD_DATA,
    payload: {
      data,
      prop
    }
  }
}

export const getInitialData = () => {
  return {
    type: GET_DATA,
    payload: axios.all([ getPosts(), getComments(), getAlbums(), getPhotos(), getTodos(), getUsers() ])
      .then( axios.spread((posts, comments, albums, photos, todos, users) => {
        const initialState = {
          posts: posts.data,
          comments: comments.data,
          albums: albums.data,
          photos: photos.data,
          todos: todos.data,
          users: users.data,
        };
        return initialState;
      })
    ).catch( err => console.log('getInitialData err: ', err)),
  }
}


const TYPICODE_DOMAIN = "https://jsonplaceholder.typicode.com";
const getPosts = () => axios.get(`${TYPICODE_DOMAIN}/posts`);
const getComments = () => axios.get(`${TYPICODE_DOMAIN}/comments`);
const getAlbums = () => axios.get(`${TYPICODE_DOMAIN}/albums`);
const getPhotos = () => axios.get(`${TYPICODE_DOMAIN}/photos`);
const getTodos = () => axios.get(`${TYPICODE_DOMAIN}/todos`);
const getUsers = () => axios.get(`${TYPICODE_DOMAIN}/users`);