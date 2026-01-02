
import { giphyApi } from '../api/giphy.api';
import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from './gif.interface';

export const getGifsByQuery = async(query: string): Promise<Gif[]> => {

    const response = await giphyApi<GiphyResponse>('/search', {
        params : {
            q: query,
            limit:10,
        }
    })

    //fetch(`https://api.giphy.com/v1/gifs/search?api_key=9Tu9iUAPMmUNd8bnu1whUmmHT6xmRNW2&q=${query}&limit=10&offset=0&rating=g&lang=es&bundle=messaging_non_clips`)

    return response.data.data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }))
}