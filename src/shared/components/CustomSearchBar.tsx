import { useState } from "react";

interface CustomSearchBarProps {
    placeHolder: string;
    buttonText: string;
    onSearch: (term: string) => void;
}

export const CustomSearchBar = ({ placeHolder, buttonText, onSearch }: CustomSearchBarProps) => {

  const [busqueda, setBusqueda] = useState('');

  const handleSearch = () => {
    onSearch(busqueda);
    setBusqueda('')
  }

  const handleKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <h1>{busqueda}</h1>
      <input type="text" 
        placeholder={placeHolder}
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        onKeyDown={e => {handleKeyDown(e)}}/>
      <button onClick={handleSearch}>{buttonText}</button>
    </div>
  )
}
