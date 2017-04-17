import React from 'react';

export default class Search extends React.Component {

  render() {
    return (
      <form className="form-group search">
        <label className="sr-only" htmlFor="search">Search</label>
        <input type="text" className="form-control" id="search" placeholder="Find a user"/>
      </form>
    );
  }
}