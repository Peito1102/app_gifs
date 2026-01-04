
import './mock-data/gifs.mock'
//import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { CustomSearchBar } from './shared/components/CustomSearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {

  const { previousTerms, gifs, HandleSearch, handleTermClicked} = useGifs();

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
