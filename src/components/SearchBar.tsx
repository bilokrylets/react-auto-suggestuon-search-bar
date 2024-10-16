import { FaSearch } from 'react-icons/fa';
import './SearchBar.scss';
import { useEffect, useState } from 'react';
import { User } from '../models/user';

type Props = {
  setResults: React.Dispatch<React.SetStateAction<User[]>>;
};
const SearchBar = ({ setResults }: Props) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchData(input);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  const fetchData = (value: string) => {
    console.log(value);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user: User) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value: string) => {
    setInput(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
