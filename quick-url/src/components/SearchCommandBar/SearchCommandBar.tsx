import {useState} from "react";
import styles from "./SearchCommandBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchCommandBar = (props: SearchBarProps) => {
  const { onSearch } = props;
  const [query, setQuery] = useState('');

  const handleChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query}
        className={styles.searchInput}
        onChange={handleChange}
        placeholder="Search command..."
      />
    </div>
  );
};

export default SearchCommandBar;
