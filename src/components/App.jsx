import React, {Component} from 'react';
import axios from 'axios'
import MenuAc from "../containers/Menu";
import {Card ,Container} from "semantic-ui-react";
import BookCard from "../containers/BookCard";
import Filter from "../containers/Filter";

import '../App.css'

class App extends Component {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('books.json')
            .then(({data}) => {
                setBooks(data)
            })
    }

    render() {
        const {books, isReady} = this.props;
        return (
            <Container className="container">
                <MenuAc/>
                <div className="main_panel">
                    <Card.Group itemsPerRow={4}>
                        {
                            !isReady ?
                                'Loading' :
                                books.map(book => <BookCard key={book.id} {...book}></BookCard>)
                        }
                    </Card.Group>
                    <Filter/>
                </div>

            </Container>
        );
    }
}

export default App;