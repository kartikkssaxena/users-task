import React, { Component } from 'react';
import './App.css';
import UsersContainer from './component/UsersContainer';

export class App extends Component {


  render() {
    return (
      <div className="App">
        <h1> List of Users</h1>
        <div className='card'>
        <UsersContainer />
        </div>
      </div>
    )
  }
}

export default App;
