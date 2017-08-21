/**
 * Created by farid on 8/15/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookActionButton extends Component{

    render(){
        return (
            <div className="book-shelf-changer">
                <select value={this.props.book.shelf} onChange={this.props.onUpdateBookCategory}>
                    <option value="none" disabled>Move to...</option>
                    {
                        this.props.bookCategories.map((bookCategory, index) =>{
                            return <option key={index} value={bookCategory.name}>{bookCategory.displayName}</option>

                        })
                    }
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
BookActionButton.propTypes = {
    bookCategories:PropTypes.array.isRequired,
    onUpdateBookCategory: PropTypes.func.isRequired,
    book:PropTypes.object.isRequired
};
export default BookActionButton;