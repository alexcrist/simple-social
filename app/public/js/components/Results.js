import React from 'react';

import Result from './Result';

export default class Results extends React.Component {

  render() {
    return (
      <div className="results">
        {
          this.props.users.map((user, index) => {
            return <Result user={user} key={index}/>
          })
        }
      </div>
    );
  }
}