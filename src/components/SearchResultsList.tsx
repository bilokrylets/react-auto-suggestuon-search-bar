import { User } from '../models/user';
import SearchResult from './SearchResult';
import './SearchResultsList.scss';

type Props = {
  results: User[];
};
const SearchResultsList = ({ results }: Props) => {
  return (
    <div className="results-list">
      {results.map((result, index) => (
        <SearchResult key={index} result={result} />
      ))}
    </div>
  );
};
export default SearchResultsList;
