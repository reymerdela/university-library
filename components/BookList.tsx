import React from "react";
import BookCart from "./BookCart";

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ books, containerClassName, title }: Props) => {
  if (books.length < 2) return;
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {books.map((book) => (
          <BookCart key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
