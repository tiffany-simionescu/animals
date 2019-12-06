import {
  FETCH_CAT_IMAGE_START,
  FETCH_CAT_IMAGE_SUCCESS,
  FETCH_CAT_IMAGE_FAIL,
  FETCH_DOG_IMAGE_START,
  FETCH_DOG_IMAGE_SUCCESS,
  FETCH_DOG_IMAGE_FAIL,
  FETCH_FOX_IMAGE_START,
  FETCH_FOX_IMAGE_SUCCESS,
  FETCH_FOX_IMAGE_FAIL
} from '../actions';

const initialState = {
  cat: 'https:\/\/purr.objects-us-east-1.dream.io\/i\/030_-_VNZ6Gt8.gif',
  dog: 'https://random.dog/aa8e5e24-5c58-4963-9809-10f4aa695cfc.jpg',
  fox: 'http://randomfox.ca/images/68.jpg',
  error: '',
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CAT_IMAGE_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FETCH_CAT_IMAGE_SUCCESS:
      return {
        ...state,
        cat: action.payload,
        error: '',
        isFetching: false
      }
    case FETCH_CAT_IMAGE_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    case FETCH_DOG_IMAGE_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FETCH_DOG_IMAGE_SUCCESS:
      return {
        ...state,
        dog: action.payload,
        error: '',
        isFetching: false
      }
    case FETCH_DOG_IMAGE_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    case FETCH_FOX_IMAGE_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FETCH_FOX_IMAGE_SUCCESS:
      return {
        ...state,
        fox: action.payload,
        error: '',
        isFetching: false
      }
    case FETCH_FOX_IMAGE_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
}