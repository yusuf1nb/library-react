import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  return (
    <div className="book">
      <Link to="/books/1">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/books/1" className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price sprice={book.salePrice} />
      <Price oprice={book.originalPrice} />
    </div>
  );
};

export default Book;
