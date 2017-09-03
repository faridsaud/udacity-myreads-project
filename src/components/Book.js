/**
 * Created by farid on 8/15/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookActionButton from "./BookActionButton";
import * as BooksAPI from '../BooksAPI';
import {Link} from "react-router-dom";

class Book extends Component {

    /**
     * @description Update the book's book shelf category
     * @param {Object} event
     */
    updateBookCategory = (event) => {
        let book = this.props.book;
        let shelf = event.target.value;
        BooksAPI.update(book, shelf)
            .then(() => {
                this.props.moveBookToBookShelf(book, shelf);
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
                                      bookShelfCategories={this.props.bookShelfCategories} book={this.props.book}/>
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
    bookShelfCategories: PropTypes.array.isRequired,
    moveBookToBookShelf: PropTypes.func.isRequired
};

export default Book;