export const getQueryObj = searchText => {
  return searchText
    .replace('?', '') //searchText will always start with '?'
    .split('&') // Put each query into an array
    .reduce( (obj, query) => { 
      let queryArr = query.split('=');
      obj[queryArr[0]] = queryArr[1];
      return obj;
    }, {}) // Don't remove initial value of {} - otherwise reduce will not work
    
  }


