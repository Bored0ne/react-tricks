import axios from 'axios';
import {Book} from "../models/Book";

// Found this on https://github.com/public-apis/public-apis
const baseUrl: string = 'http://openlibrary.org/search.json';

// @ts-ignore
export async function GetBooks(title): Promise<Book[]> {
    let bookResult = await axios.get(baseUrl, {
        params: {
            q: title || ""
        }
    });
    return bookResult?.data?.docs;
}
