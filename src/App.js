import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <h1>Country Search</h1>
      <SearchBar />
    </div>
  );
}

export default App;