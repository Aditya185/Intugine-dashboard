import React, { Component } from 'react';
import './App.css';



import Main from './components/MainComponent';
import TableList from './components/TableComponent';

class App extends Component {

  render() {
   
    return (
      <div className="App">
       <Main/>
       <TableList/>
      
      </div>
     
    );
  }
}
export default App;
