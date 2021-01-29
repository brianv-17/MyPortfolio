import React from 'react';
import Main from './views/Main';
import About from './views/About';
import { Router } from '@reach/router';
import "./App.css"
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/portfolio"/>
        <About path="/about"/>
      </Router>
    </div>
  );
}
export default App;
