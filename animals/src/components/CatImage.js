import React from 'react';
import '../App.css';
import { connect } from 'react-redux';

// Actions
import { getCatImage } from '../actions';

const CatImage = props => {

  const fetchCatImage = e => {
    e.preventDefault();
    props.getCatImage();
  }

  return (
    <div>
      <h1>Cat Image Generator</h1>
      <div>
        <img 
          src={props.cat}
          alt="cat"
        />
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchCatImage}>New Cat Image</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cat: state.cat,
    error: state.error
  }
}

export default connect(mapStateToProps, { getCatImage })(CatImage);