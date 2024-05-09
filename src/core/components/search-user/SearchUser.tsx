import React from "react";
import "./SearchUser.css";

interface SearchInputProps {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  handleSearchChange,
}) => {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input"
        placeholder="Búsqueda por nombre o correo..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchInput;
