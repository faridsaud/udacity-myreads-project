import React from 'react'
import './App.css'
import SearchBar from "./components/SearchBar";
import HomePage from "./components/HomePage";
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BookSearchHomePage from "./components/BookSearchHomePage";

class BooksApp extends React.Component {
    state ={
        bookShelfs: []
    };


    getDislayName(name){
        let bookShelfsFiltered = this.state.bookShelfs.filter(bookShelf =>
            bookShelf.name===name
        );
        return bookShelfsFiltered[0].displayName;
    }

    getBookCategories=()=>{
        return this.state.bookShelfs.map(bookShelf=>{
            return {
                name: bookShelf.name,
                displayName: bookShelf.displayName
            }
        })
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            console.log(books);
            let bookShelfs =  BooksAPI.getBookShelfsCategories();
            bookShelfs.map(bookShelf =>{
                bookShelf.books = books.filter(book => book.shelf===bookShelf.name);
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
                    <HomePage bookShelfs={this.state.bookShelfs} getBookCategories={this.getBookCategories}/>
                )}/>
                <Route path='/search'  render={()=>(
                    <BookSearchHomePage getBookCategories={this.getBookCategories}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
