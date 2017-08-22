import React from 'react'
import './App.css'
import SearchBar from "./components/SearchBar";
import HomePage from "./components/HomePage";
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BookSearchHomePage from "./components/BookSearchHomePage";

class BooksApp extends React.Component {


    state = {
        bookShelfs: []
    };


    getDislayName(name) {
        let bookShelfsFiltered = this.state.bookShelfs.filter(bookShelf =>
            bookShelf.name === name
        );
        return bookShelfsFiltered[0].displayName;
    }

    removeBookFromBookShelf = (bookId, bookShelfName) => {
        let bookShelfs = this.state.bookShelfs;
        let bookShelf = bookShelfs.find(bookShelf => bookShelf.name === bookShelfName);
        bookShelf.books = bookShelf.books.filter(book => book.id !== bookId);
        this.setState(bookShelfs);
    };

    addBookToBookShelf = (book, bookShelfName) => {
        let bookShelfs = this.state.bookShelfs;
        let bookShelf = bookShelfs.find(bookShelf => bookShelf.name === bookShelfName);
        book.shelf = bookShelfName;
        bookShelf.books.push(book);
        this.setState(bookShelfs);
    };

    swapBookFromBookShelf = (book, destinyBookShelfName) => {
        if (book.shelf && this.verifyBookExistanceInBookShelf(book.id, book.shelf)) {
            this.removeBookFromBookShelf(book.id, book.shelf);
        }
        if (destinyBookShelfName !== "none") {
            this.addBookToBookShelf(book, destinyBookShelfName);
        }
    };

    verifyBookExistanceInBookShelf = (bookId, bookShelfName) => {
        let bookShelf = this.state.bookShelfs.find(bookShelf => bookShelf.name === bookShelfName);
        if(bookShelf){
            let book = bookShelf.books.find(book => book.id === bookId);
            return !!book;
        }else{
            return false;
        }

    };

    getBookCategories = () => {
        return this.state.bookShelfs.map(bookShelf => {
            return {
                name: bookShelf.name,
                displayName: bookShelf.displayName
            }
        })
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            console.log(books);
            let bookShelfs = BooksAPI.getBookShelfsCategories();
            bookShelfs.map(bookShelf => {
                bookShelf.books = books.filter(book => book.shelf === bookShelf.name);
            });
            console.log(bookShelfs);
            this.setState({
                bookShelfs
            })
        })
    }

    render() {

        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <HomePage bookShelfs={this.state.bookShelfs} getBookCategories={this.getBookCategories}
                              swapBookFromBookShelf={this.swapBookFromBookShelf}/>
                )}/>
                <Route path='/search' render={() => (
                    <BookSearchHomePage getBookCategories={this.getBookCategories}
                                        swapBookFromBookShelf={this.swapBookFromBookShelf}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
