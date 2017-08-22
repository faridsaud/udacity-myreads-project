/**
 * Created by farid on 8/15/2017.
 */
import React, {Component} from 'react';
import Book from "./Book";
import PropTypes from 'prop-types';


class BookShelf extends Component {


    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookShelf.displayName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.bookShelf.books.map((book, index) => {
                                return <li key={index}><Book book={book} bookCategories={this.props.bookCategories} swapBookFromBookShelf={this.props.swapBookFromBookShelf}/></li>
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}
Book.propTypes = {
    bookShelf: PropTypes.shape({
        name: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }),
    bookCategories:PropTypes.array.isRequired,
    swapBookFromBookShelf:PropTypes.func.isRequired

}
export default BookShelf;