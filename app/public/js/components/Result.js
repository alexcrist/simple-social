import React from 'react';

export default class Result extends React.Component {

  render() {
    return (
      <div className="result">
        <div className="result-text">
          <div className="result-item">{this.props.user.username}</div>
          <div className="result-item">{this.props.user.following.length}</div>
          <div className="result-item">{this.props.user.followers.length}</div>
        </div>
        <button type="button" className="btn btn-default add-button" aria-label="Left Align">
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
      </div>
    );
  }
}