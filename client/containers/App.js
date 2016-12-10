import React from 'react';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';

const App = ({ children }) => (
  <div>
    <NavBar />
    { children }
  </div>
)

export default App;
