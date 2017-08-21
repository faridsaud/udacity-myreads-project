import React from 'react'
import './App.css'
import SearchBar from "./components/SearchBar";
import HomePage from "./components/HomePage";
import {Route} from 'react-router-dom';
import BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

    state = {
        
    };

    render() {
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
