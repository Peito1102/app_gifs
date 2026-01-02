
import './mock-data/gifs.mock'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { CustomSearchBar } from './shared/components/CustomSearchBar'
import { PreviousSearches } from './gifs/PreviousSearches'
import { GifList } from './gifs/GifList'
import { useState } from 'react'

export const GifsApp = () => {

  const [previousTerms, setpreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(`Term clicked: ${term}`);
  }

  const HandleSearch = (busqueda: string) => {
    const list = previousTerms.map(term => term.toLowerCase());
    const miniBusqueda = busqueda.toLowerCase();
    if (busqueda.trim() === '') {
      return;
    } if (list.includes(miniBusqueda)) {
      return;
    } else {
      if (previousTerms.length === 0) {
        setpreviousTerms([busqueda]);
        return;
      } if (previousTerms.length >= 7) {
        const newPreviousTerms = previousTerms.slice(0, 8);
        setpreviousTerms([busqueda, ...newPreviousTerms]);
        return;
      } else {
        setpreviousTerms([busqueda, ...previousTerms]);
        return;
      }
    }
    console.log(`Searching gifs with term: ${busqueda}`);
  }

  return (
    <>
    {/* Header */}
    <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto!' />

    {/* Search Box */}
    <CustomSearchBar placeHolder="Buscar gifs" buttonText="Buscar" onSearch={HandleSearch}/>

    { /* Busquedas previas */}
    <PreviousSearches searches={previousTerms} onTermClick={handleTermClicked}/>

    {/* Gifs Grid */}
    <GifList gifs={mockGifs} />
    
    </>
  )
}
