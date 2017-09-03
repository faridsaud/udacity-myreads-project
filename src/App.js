import React from 'react'
import './App.css'
import HomePage from "./components/HomePage";
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BookSearchHomePage from "./components/BookSearchHomePage";
import BookDetail from "./components/BookDetail";

class BooksApp extends React.Component {


    state = {
        bookShelfs: []
    };

    /**
     * @description Remove a book from a book shelf and update state
     * @param {String} bookId
     * @param {String} bookShelfName
     */
    removeBookFromBookShelf = (bookId, bookShelfName) => {
        let bookShelfs = this.state.bookShelfs;
        let bookShelf = bookShelfs.find(bookShelf => bookShelf.name === bookShelfName);
        bookShelf.books = bookShelf.books.filter(book => book.id !== bookId);
        this.setState(bookShelfs);
    };


    /**
     * @description Add a book to a book shelf and update state
     * @param {Object} book
     * @param {String} bookShelfName
     */
    addBookToBookShelf = (book, bookShelfName) => {
        let bookShelfs = this.state.bookShelfs;
        let bookShelf = bookShelfs.find(bookShelf => bookShelf.name === bookShelfName);
        book.shelf = bookShelfName;
        bookShelf.books.push(book);
        this.setState(bookShelfs);
    };

    /**
     * @description Search the book shelf name of the book
     * @param {Object} book
     * @returns {String} book shelf name
     */
    searchBookShelfOfBook = (book) => {
        for (let i = 0; i < this.state.bookShelfs.length; i++) {
            let bookFound = this.state.bookShelfs[i].books.find((bookInBookShelf) => bookInBookShelf.id === book.id);
            if (bookFound) {
                return bookFound.shelf;
            }
        }
        return undefined;
    };

    /**
     * @description Move a book to a new book shelf
     * @param {Object} book
     * @param {String} destinyBookShelfName
     */
    moveBookToBookShelf = (book, destinyBookShelfName) => {
        if (book.shelf && this.verifyBookExistanceInBookShelf(book.id, book.shelf)) {
            this.removeBookFromBookShelf(book.id, book.shelf);
        }
        if (destinyBookShelfName !== "none") {
            this.addBookToBookShelf(book, destinyBookShelfName);
        }
    };

    /**
     * @description Verify if a book exists in the book shelf
     * @param {String} bookId
     * @param {String} bookShelfName
     * @returns {Boolean} exist in book shelf
     */
    verifyBookExistanceInBookShelf = (bookId, bookShelfName) => {
        let bookShelf = this.state.bookShelfs.find(bookShelf => bookShelf.name === bookShelfName);
        if (bookShelf) {
            let book = bookShelf.books.find(book => book.id === bookId);
            return !!book;
        } else {
            return false;
        }

    };

    /**
     * @description Returns all the available book shelf's categories
     * @returns {Array} Book shelfs name and display name
     */
    getBookShelfCategories = () => {
        return this.state.bookShelfs.map(bookShelf => {
            return {
                name: bookShelf.name,
                displayName: bookShelf.displayName
            }
        })
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            let bookShelfs = BooksAPI.getBookShelfCategories();
            bookShelfs.map(bookShelf => {
                bookShelf.books = books.filter(book => book.shelf === bookShelf.name);
            });
            this.setState({
                bookShelfs
            })
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <HomePage bookShelves={this.state.bookShelfs} bookShelfCategories={this.getBookShelfCategories()}
                              moveBookToBookShelf={this.moveBookToBookShelf}/>
                )}/>
                <Route path='/search' render={() => (
                    <BookSearchHomePage bookShelfCategories={this.getBookShelfCategories()}
                                        moveBookToBookShelf={this.moveBookToBookShelf}
                                        searchBookShelfOfBook={this.searchBookShelfOfBook}/>
                )}/>
                <Route path='/book/:id' render={(props) => (
                    <BookDetail match={props.match}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
