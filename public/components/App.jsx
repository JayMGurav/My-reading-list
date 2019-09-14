import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import BookList from "./BookList";
import AddBook from "./AddBook";

const client = new ApolloClient({
    uri: 'http://127.0.0.1:3000/graphql'
})


function App(){
    return(
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Hello</h1>
                <BookList/>
                <AddBook />
            </div>
        </ApolloProvider>
    );
}

export default App;