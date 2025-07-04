
const readbooks = (books, titleToSearch) => {
    if (Array.isArray(books) && books.length > 0) {

        const book = books.find(book => titleCompare(book.title, titleToSearch));

        if (book) {
            return book.isRead;
        }
    }
    return false;
}

const titleCompare = (title1, title2) => {
    // book.title === titleToSearch is not case insensitive
    // we can use tolowercase on booth cases book.title.toLowerCase() === titleToSearch.toLowerCase()
    // or  localeCompare (see more https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#using_options)
    // return title1.localeCompare(title2, undefined, { sensitivity: 'base' }) === 0;
    // or use localeCompare with options
    // return title1.localeCompare(title2, undefined, { sensitivity: 'accent' }) === 0;
    // or use localeCompare with options
    // return title1.localeCompare(title2, undefined, { sensitivity: 'variant' }) === 0;
    return title1.toLowerCase() === title2.toLowerCase();
}

module.exports = {
    readbooks
}