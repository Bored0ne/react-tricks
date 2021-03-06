// Inject in the function that fetches data in the component where you are going to be immediately using it.
// This gives us the benefit of testing the function with fake data and waiting until the real function exists.
// This also allows us to do a baby version of DI which is especially beneficial for unit testing this component.
// We can fake the initial search using an injected mock to render a "BookTable" and
import {useEffect, useState} from "react";
import {queueCall} from "../../util/queueCall";
import spinner from "../../util/spinner";
import {GetBooks} from "../api/GetBooks";

export function useBooksApi(GetBooks = GetBooks) {
    let [searchableTitle, setSearchableTitle] = useState("of mice and men");
    let [books, setBooks] = useState([]);
    useEffect(() => {
        // This is great for waiting until someone is done typing before queueing up a search call to the api.
        queueCall('GetBooks', () => {
            // Spinners are a great way to indicate something is happening.
            // I like my spinners to be a static function I can just call and expect it to do it's job.
            // There are other ways to do it but this ends up being very async/await friendly as are most functional
            // approaches to things like this. This specifically is evaluating which spinner needs to be on/off which
            // to me is easier than tracking some spinner object or embedding a
            // react component into my current dom to do spinning.
            spinner.start('GetBooks');
            GetBooks(searchableTitle)
                .then(setBooks)
                .finally(() => spinner.stop('GetBooks'));
        });
    }, [searchableTitle]);
    return {searchableTitle, setSearchableTitle, books};
}
