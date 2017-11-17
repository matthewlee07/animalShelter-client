import * as actions from '../actions/actions';

const initialState = {
  cat: {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    gender: 'Female', 
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  dog: {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    gender: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  error: null
};

export const reducer = (state = initialState, action) => {
  if (action.type === actions.FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      cat: action.cat,
      error: null
    })
  }

  else if (action.type === actions.FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    })
  }

  else if (action.type === actions.FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      dog: action.dog,
      error: null
    })
  }

  else if (action.type === actions.FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    })
  }

  else if (action.type === actions.DELETE_CAT_SUCCESS) {
    return Object.assign({}, state, {
      cat: {},
      error: null
    })
  }

  else if (action.type === actions.DELETE_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    })
  }

  else if (action.type === actions.DELETE_DOG_SUCCESS) {
    return Object.assign({}, state, {
      dog: {},
      error: null
    })
  }

  else if (action.type === actions.DELETE_DOG_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    })
  }

  return state
}