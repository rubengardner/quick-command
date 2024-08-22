import {useState} from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { onSearch } = props;
  const [query, setQuery] = useState('');

  const handleChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search command"
      />
    </div>
  );
};

export default SearchBar;
