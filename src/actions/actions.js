import {SERVER_URL} from '../config'

//Get Cat Info
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error
})

export const fetchCat = () => dispatch => {
  fetch('cat')
  .then((res) => dispatch(fetchCatSuccess(res)))
  .catch(error => dispatch(fetchCatError(error)))
}

//Get Dog Info
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = (error) => ({
  type: FETCH_DOG_ERROR,
  error
})

export const fetchDog = () => dispatch => {
  fetch('dog')
  .then((res) => dispatch(fetchDogSuccess(res)))
  .catch(error => dispatch(fetchDogError(error)))
}


//Delete Adopted Cat
export const DELETE_CAT_SUCCESS = 'DELETE_CAT_SUCCESS';
export const deleteCatSuccess = () => ({
  type: DELETE_CAT_SUCCESS
})

export const DELETE_CAT_ERROR = 'DELETE_CAT_ERROR';
export const deleteCatError = (error) => ({
  type: DELETE_CAT_ERROR,
  error
})

export const adoptCat = () => dispatch => {
  fetch(`${SERVER_URL}/cat`, {method: 'delete'})
  .then(() => dispatch(deleteCatSuccess()))
  .then(() => dispatch(fetchCat()))
  .catch(error => dispatch(fetch))
}

//Delete Adopted Dog
export const DELETE_DOG_SUCCESS = 'DELETE_DOG_SUCCESS';
export const deleteDogSuccess = () => ({
  type: DELETE_DOG_SUCCESS
})

export const DELETE_DOG_ERROR = 'DELETE_DOG_ERROR';
export const deleteDogError = (error) => ({
  type: DELETE_DOG_ERROR,
  error
})

export const adoptDog = () => dispatch => {
  fetch(`${SERVER_URL}/dog`, {method: 'delete'})
  .then(() => dispatch(deleteDogSuccess()))
  .then(() => dispatch(fetchDog()))
  .catch(error => dispatch(fetch))
}