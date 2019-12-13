import React from 'react';
export default class ChildB extends React.Component {
  render() {
    return (
      <div>
        <h1>ChildB練習區以下</h1>
        <h2>{text}</h2>
        <h2>{'text'}</h2>
      </div>
    )
  }
}

let text = "helloreact"