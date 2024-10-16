import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';
import { User } from './models/user';

function App() {
  const [results, setResults] = useState<User[]>([]);
  return (
    <div className="app">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
}

export default App;
