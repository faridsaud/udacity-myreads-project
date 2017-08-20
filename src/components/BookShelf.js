/**
 * Created by farid on 8/15/2017.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from "./Book";
import PropTypes from 'prop-types';


class BookShelf extends Component {

    render() {

        const book = {
            title:'Book title',
            authors:'Book author',
            coverUrl:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
        }
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book book={book}/>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}
Book.propTypes = {
    bookShelf:PropTypes.shape({
        name: PropTypes.string.isRequired
    })
}
export default BookShelf;