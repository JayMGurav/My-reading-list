import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookDetailsQuery } from "../queries.js/queries";

class BookDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div id="book-details">
        <p>Show Book details here : </p>
      </div>
    );
  }
}

export default graphql(getBookDetailsQuery)(BookDetail);
