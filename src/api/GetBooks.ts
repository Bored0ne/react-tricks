import axios from 'axios';
import {Book} from "../models/Book";
import PureCache from 'pure-cache';

// Found this on https://github.com/public-apis/public-apis
const baseUrl: string = 'https://openlibrary.org/search.json';
const cacheStore = new PureCache({expiryCheckInterval: 500});
const FIVE_MINUTES = 5 * 60 * 1000;

// @ts-ignore
export async function GetBooks(title): Promise<Book[]> {
    let result = cacheStore.get(title)?.value;
    console.log(result);
    if (!result) {
        let bookResult = await axios.get(baseUrl, {
            params: {
                q: title || ""
            }
        });
        result = bookResult?.data?.docs;
        cacheStore.put(title, result, FIVE_MINUTES)
    }
    return result;
}
