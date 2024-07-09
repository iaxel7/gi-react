
import './App.css';
import BasicInfo from './BasicInfo';
import React, {Component} from 'react';


// HARD ----------------------------------------
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [
        { name: 'Jorge Esparza', phone: '999-999-9999', dob: 'May 4, 2000', favmovie:'la-la-Land'},
        { name: 'Peter-Parker', phone: '888-888-8888', dob: 'August 10, 2000', favmovie:'Spider-Man'},
        { name: 'Wade Wilson aka Deadpool', phone: '123-456-7891', dob: 'November 22, 1973', favmovie:'My own Movie'}
      ]
    }
  }
  render (){
    return (
      <div className = "app-container">
       {this.state.people.map((person,index) => (
        <BasicInfo key={index} person = {person} />
       ))}
      </div>
    );
  }
}


//medium cont ----------------------------------------------------

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       person: {
//         name: 'Jorge Esparza',
//         phone: '999-999-9999',
//         dob: 'May 4th 2000',
//         favmovie: 'La-La Land'
//       }
//     };
//   }
//   render (){
//     return (
//       <div>
//         <BasicInfo person = {this.state.person} />
//       </div>
//     );
//   }
// }

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
