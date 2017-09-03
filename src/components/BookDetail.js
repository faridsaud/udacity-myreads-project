/**
 * Created by farid on 8/21/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';
import {
    Card, CardActions, CardHeader, CardText, Chip, Divider, MuiThemeProvider, RaisedButton
} from "material-ui";

class BookDetail extends Component {
    state = {
        book: {}
    };

    componentDidMount = () => {
        BooksAPI.get(this.props.match.params.id).then((book) => {
            this.setState({
                book
            })
        })
    };

    render() {
        let book = this.state.book;
        let url = "";
        if (this.state.book.imageLinks) {
            url = this.state.book.imageLinks.thumbnail;
        }
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Book description</h2>
                <ol className="books-grid">
                    <div>
                        <MuiThemeProvider>
                            <Card>

                                <CardHeader title={book.title} subtitle={book.subtitle}
                                            avatar={url}
                                />
                                <Divider />
                                <CardText>
                                    {book.description}
                                </CardText>
                                <CardText>
                                    {book.categories && book.categories.map((category, key) => {
                                        return <Chip key={key}>{category}</Chip>
                                    })
                                    }
                                </CardText>
                                <CardActions style={{"textAlign": "right"}}>
                                    {book.infoLink &&
                                    <a href={book.infoLink}>
                                        <RaisedButton label="Info"/>
                                    </a>
                                    }
                                    {book.previewLink &&
                                    <a href={book.previewLink}>
                                        <RaisedButton label="Preview"/>
                                    </a>
                                    }
                                </CardActions>
                            </Card>
                        </MuiThemeProvider>
                    </div>
                </ol>
            </div>
        )
    }
}

BookDetail.propTypes = {
    book: PropTypes.object.isRequired
};

export default BookDetail;
