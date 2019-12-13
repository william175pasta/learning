import React from 'react';
import ChildDButton from './ChildDButton.jsx'

const lists = ['JavaScript', 'Javas', 'Nodess', 'Pythons'];
export default class ChildA extends React.Component {
  render() {
    return (
      <div >
        <h1>ChilA練習區以下</h1>
        <a href="#" style={{ fontSize: '28px', color: '#f0f' }} >超表單</a>
        <ul>
          {lists.map((result, index) => { return (<li key={index}>{result}</li>) })}
        </ul>
        <ChildDButton text='我在a區' />
      </div>

    )
  }
}

