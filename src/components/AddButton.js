/**
 * Created by farid on 8/15/2017.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class AddButton extends Component{
    render(){
        return (
            <Link to="/search">
                <div className="open-search">
                    <a>Add a book</a>
                </div>
            </Link>
        )
    }
}

export default AddButton;