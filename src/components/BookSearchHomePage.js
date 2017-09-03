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

    /**
     * @description Update the term used to search books
     * @param {String} searchTerm
     */
    updateSearchTerm = (searchTerm) => {
        this.setState({
            searchTerm
        });
        BooksAPI.search(searchTerm, 100)
            .then(books => {
                this.setState({
                    books
                })
            });
    };

    render() {
        return (
            <div className="search-books">
                <SearchBar onUpdateSearchTerm={this.updateSearchTerm}/>
                <SearchResults books={this.state.books} bookShelfCategories={this.props.bookShelfCategories}
                               moveBookToBookShelf={this.props.moveBookToBookShelf}/>
            </div>
        )
    }
}

BookSearchHomePage.propTypes = {
    bookShelfCategories: PropTypes.array.isRequired,
    moveBookToBookShelf: PropTypes.func.isRequired

};

export default BookSearchHomePage;