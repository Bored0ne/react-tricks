import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {GetBooks} from "../api/GetBooks";
import {Book} from '../models/Book'
import {useBooksApi} from "../hooks/useBooksApi";

// have an expect that it conforms the shape we want.
const BookTable = ({...props}) => {
    let {searchableTitle, setSearchableTitle, books} = useBooksApi();

    return <div>
        <input type="text"
               value={searchableTitle}
               onChange={event => {
                   setSearchableTitle(event.target.value)
               }}/>
        <ul>
            {books.map(
                /**
                 * @param book {Book}
                 * @returns {*}
                 */
                book => {
                    return <li key={book.key}>{book.title}</li>
                })}
        </ul>
    </div>;
};

BookTable.propTypes = {
    GetBooks: PropTypes.func
};
BookTable.defaultProps = {
    // This is what I mean about injecting. If I don't have a GetBooks method or it evaluates to undefined or null
    // I can just define a faked version of it using faker or just test data to make it work until I need to add the api calls.
    GetBooks: GetBooks || (async (title) => {
        return [new Book("The lord of the rings", '1')]
    })
};

export {BookTable};
