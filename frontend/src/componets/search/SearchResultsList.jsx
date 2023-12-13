import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, setSearch }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        // return <SearchResult result={result.title} like={result.like} setSearch={setSearch} key={id} />;
        return <SearchResult result={result} setSearch={setSearch} key={id} />;
      })}
    </div>
  );
};