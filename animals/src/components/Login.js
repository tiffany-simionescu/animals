import React from 'react';
import Loader from 'react-loader-spinner';
import '../App.css';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    },
    isLoggedIn: false
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({...this.state, isLoggedIn: true});
  } else {
      this.setState({...this.state, isLoggedIn: false });
  }}

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/cat-image');
        this.setState({...this.state, isLoggedIn: true});
      })
      .catch(err => console.log(err))
  };

  render () {
    return (
      <div>
        <h1>Log In</h1>
        {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" />
            <p>Loading...</p>
          </div>
        )}
        <form onSubmit={this.login}>
          <input 
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input 
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <button>Log in</button>
        </form>
      </div>
    )
  }
}

export default Login;