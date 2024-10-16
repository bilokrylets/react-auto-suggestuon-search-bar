import { User } from '../models/user';
import './SearchResult.scss';

type Props = {
  result: User;
};
const SearchResult = ({ result }: Props) => {
  return (
    <div
      className="search-result"
      onClick={() => alert(`you clicked on ${result.name}`)}
    >
      {result.name}
    </div>
  );
};
export default SearchResult;
