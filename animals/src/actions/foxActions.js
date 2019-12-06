import axios from 'axios';

export const FETCH_FOX_IMAGE_START = 'FETCH_FOX_IMAGE_START';
export const FETCH_FOX_IMAGE_SUCCESS = 'FETCH_FOX_IMAGE_SUCCESS';
export const FETCH_FOX_IMAGE_FAIL = 'FETCH_FOX_IMAGE_FAIL';

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = 'http://randomfox.ca/floof';

export const getFoxImage = () => dispatch => {
  dispatch({ type: FETCH_FOX_IMAGE_START });
  axios.get(proxyurl + url)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_FOX_IMAGE_SUCCESS, payload: res.data.image })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FOX_IMAGE_FAIL, payload: `${err.response}` })
    })
}