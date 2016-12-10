import React from 'react';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';

const App = ({ children }) => (
  <div>
    <NavBar />
    <SearchBox />
    { children }
  </div>
)

export default App;

