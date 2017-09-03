/**
 * Created by farid on 8/15/2017.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class SearchBar extends Component {
    render() {
        return (
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(event) => {
                        this.props.onUpdateSearchTerm(event.target.value)
                    }}/>
                </div>
            </div>
        )
    }
}

SearchBar.propTypes = {
    onUpdateSearchTerm: PropTypes.func.isRequired
};
export default SearchBar;
