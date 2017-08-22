/**
 * Created by farid on 8/21/2017.
 */
import React, {Component} from 'react';
import Book from "./Book";
import PropTypes from 'prop-types';

class SearchResults extends Component {

    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.props.books.map((book, index) => {
                            if(book.shelf===undefined){
                                book.shelf="none";
                            }
                            return <li key={index}><Book book={book} bookCategories={this.props.bookCategories} swapBookFromBookShelf={this.props.swapBookFromBookShelf}/></li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

SearchResults.propTypes = {
    books:PropTypes.array.isRequired,
    swapBookFromBookShelf:PropTypes.func.isRequired

};

export default SearchResults;



