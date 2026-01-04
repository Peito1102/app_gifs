import { useRef, useState } from 'react'
import type { Gif } from '../actions/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-query'

//const gifCache: Record<string, Gif[]> = {};

export const useGifs = () => {
    const [previousTerms, setpreviousTerms] = useState<string[]>([]);

    const [gifs, setgifs] = useState<Gif[]>([]);

    const gifCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async(term: string) => {
        setgifs(gifCache.current[term])
        //const gifs = await getGifsByQuery(term);
        //setgifs(gifs);
    }

    const HandleSearch = async(busqueda: string) => {
    busqueda = busqueda.trim().toLowerCase()
    if (busqueda === '' || previousTerms.includes(busqueda)) return;
    setpreviousTerms([busqueda, ...previousTerms].splice(0,7));

    const myGifs = await getGifsByQuery(busqueda);

    setgifs(myGifs)

    gifCache.current[busqueda] = myGifs;
    console.log(gifCache)
    }

    return {
        previousTerms,
        gifs,
        handleTermClicked,
        HandleSearch
    }

}
