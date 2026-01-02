
import './mock-data/gifs.mock'
//import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { CustomSearchBar } from './shared/components/CustomSearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { useState } from 'react'
import { getGifsByQuery } from './gifs/actions/get-gifs-query'
import type { Gif } from './gifs/actions/gif.interface'

export const GifsApp = () => {

  const [previousTerms, setpreviousTerms] = useState<string[]>([]);

  const [gifs, setgifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(`Term clicked: ${term}`);
  }

  const HandleSearch = async(busqueda: string) => {
    busqueda = busqueda.trim().toLowerCase()
    if (busqueda === '') return;
    if (previousTerms.includes(busqueda)) return;
    setpreviousTerms([busqueda, ...previousTerms].splice(0,7));

    const myGifs = await getGifsByQuery(busqueda);

    setgifs(myGifs)
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
    <GifList gifs={gifs} />
    
    </>
  )
}
