import React, { Component } from 'react'
import Book from './book';

function App() {
  return (
    <div>
      <h1>My Bookstore</h1>
      <Book title="Harry Potter" author="J.K. Rowling" price="25"/>
      <Book title="The Little Prince" author="Antoine de Saint-Exupéry" price="18" />
      <Book title="1984" author="George Orwell" price="22" />
    </div>
  );
}

export default App;