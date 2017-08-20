/**
 * Created by farid on 8/16/2017.
 */
import React, {Component} from 'react';
import AddButton from "./AddButton";
import BookShelf from "./BookShelf";


class HomePage extends Component{
    render(){
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf bookshelf={{name: "Currently Reading"}}/>
                    </div>
                </div>
                <AddButton/>
            </div>
            )

    }

}

export default HomePage;