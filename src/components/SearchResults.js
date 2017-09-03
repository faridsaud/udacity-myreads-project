/**
 * Created by farid on 8/21/2017.
 */
import React, {Component} from 'react';
import Book from "./Book";
import PropTypes from 'prop-types';

class SearchResults extends Component {

    render() {
        console.log(this.props.books);
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.props.books.map((book, index) => {
                            if (book.shelf === undefined) {
                                let bookShelf = this.props.searchBookShelfOfBook(book);
                                if (bookShelf) {
                                    book.shelf = bookShelf;
                                } else {
                                    book.shelf = "none";
                                }
                            }

                            return <li key={index}><Book book={book}
                                                         bookShelfCategories={this.props.bookShelfCategories}
                                                         moveBookToBookShelf={this.props.moveBookToBookShelf}/></li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

SearchResults.propTypes = {
    books: PropTypes.array.isRequired,
    bookShelfCategories: PropTypes.array.isRequired,
    moveBookToBookShelf: PropTypes.func.isRequired,
    searchBookShelfOfBook: PropTypes.func.isRequired

};

export default SearchResults;



