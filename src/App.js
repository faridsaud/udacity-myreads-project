import React from 'react'
import './App.css'
import SearchBar from "./components/SearchBar";
import HomePage from "./components/HomePage";
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: true
    };

    render() {
        let showSearchBar = true;
        return (
            <div className="app">
                <Route exact path='/' render={()=>(
                    <HomePage/>
                    )}/>
                <Route path='/search' component={SearchBar}/>
            </div>
        )
    }
}

export default BooksApp
