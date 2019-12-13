import React from 'react';
import ChildA from './ChildA.jsx';
import ChildB from './ChildB.jsx';
import ChildC from './ChildC.jsx';
import ChildD from './ChildD.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <ChildA />
        <ChildB />
        <ChildC />
        <ChildD />
      </div>
    );
  }
}


