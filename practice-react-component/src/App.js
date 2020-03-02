import React, { Component } from 'react';
import Rect from './Rect'
import './App.css';

class App extends Component {
  constructor( props ) {
    // console.log( this.props ) superの前にthisは使えない
    // super() ここを空にすると、this.propsがundifinedとなる
    super( props )
    console.log( this.props )
    this.title = props.title
    this.message = props.message
    console.log( props )
  }

  render () {
    return (
      <div className="App">
        <h1>{ this.title }</h1>
        <p>{ this.message }</p>
        <Rect fontSize="10" />
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
