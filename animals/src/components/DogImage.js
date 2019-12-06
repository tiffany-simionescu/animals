import React from 'react';
import '../App.css';
import { connect } from 'react-redux';

// Actions
import { getDogImage } from '../actions/';

const DogImage = props => {

  const fetchDogImage = e => {
    e.preventDefault();
    props.getDogImage();
  }

  return (
    <div>
      <h1>Dog Image Generator</h1>
      <div>
            <img 
              src={props.dog}
              alt="dog"
            />
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchDogImage}>New Dog Image</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    dog: state.dog,
    error: state.error
  }
}

export default connect(mapStateToProps, { getDogImage })(DogImage);