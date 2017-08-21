/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import AddButton from "./AddButton";
import BookShelf from "./BookShelf";
import PropTypes from 'prop-types';


class HomePage extends Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {
                            this.props.bookShelfs.map((bookShelf, index)=>{
                                return <BookShelf key={index} bookShelf={bookShelf} bookCategories ={this.props.getBookCategories()}/>
                            })
                        }
                    </div>
                </div>
                <AddButton/>
            </div>
        )

    }
}

HomePage.propTypes = {
    bookShelfs:PropTypes.array.isRequired
};
export default HomePage;