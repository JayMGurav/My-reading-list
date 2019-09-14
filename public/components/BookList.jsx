import React from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries.js/queries";

//components
import BookDetail from "./bookDetails";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displayBooks = () => {
    let data = this.props.data;
    console.log(data);
    if (data.loading) {
      return <div>Loading data..</div>;
    } else {
      return data.books.map(book => {
        return (
          <li key={book.id} onClick={e => this.setState({ selected: book.id })}>
            {book.name}
          </li>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <ul className="list">{this.displayBooks()}</ul>
        <BookDetail bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
