import 'whatwg-fetch';
import React from 'react';

import Results from './Results';
import Search from './Search';

export default class Content extends React.Component {

  constructor() {
    super();
    this.state = {
      users: []
    };
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('/users')
      .then(res => {
        return res.json()
      })
      .then(users => {
        this.setState({users});
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <Search/>
        <Results users={this.state.users}/>
      </div>
    );
  }
}