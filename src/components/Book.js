/**
 * Created by farid on 8/15/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookActionButton from "./BookActionButton";
import * as BooksAPI from '../BooksAPI';
import {Link} from "react-router-dom";

class Book extends Component {

    updateBookCategory = (event) => {
        let book = this.props.book;
        let shelf = event.target.value;
        BooksAPI.update(book, shelf)
            .then(() => {
                this.props.swapBookFromBookShelf(book, shelf);
            })
    };

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <Link to={"/book/" + this.props.book.id}>
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
                        }}/>
                    </Link>
                    <BookActionButton onUpdateBookCategory={this.updateBookCategory}
                                      bookCategories={this.props.bookCategories} book={this.props.book}/>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}

Book.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        authors: PropTypes.string.isRequired,
        imageLinks: PropTypes.object.isRequired
    }),
    bookCategories: PropTypes.array.isRequired,
    swapBookFromBookShelf: PropTypes.func.isRequired
};

export default Book;