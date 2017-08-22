/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types';

class BookSearchHomePage extends Component {
    state = {
        searchTerm: '',
        books: []
    };

    updateSearchTerm = (searchTerm) => {
        console.log(searchTerm);
        this.setState({
            searchTerm
        });
        BooksAPI.search(searchTerm, 100)
            .then(books => {
                console.log(books);
                this.setState({
                    books
                })
            });

    };

    render() {
        return (
            <div className="search-books">
                <SearchBar onUpdateSearchTerm={this.updateSearchTerm}/>
                <SearchResults books={this.state.books} bookCategories ={this.props.getBookCategories()} swapBookFromBookShelf={this.props.swapBookFromBookShelf}/>
            </div>
        )

    }
}
BookSearchHomePage.propTypes = {
    getBookCategories:PropTypes.func.isRequired,
    swapBookFromBookShelf:PropTypes.func.isRequired

};

export default BookSearchHomePage;