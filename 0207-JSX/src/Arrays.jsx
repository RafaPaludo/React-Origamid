import React from "react";

const Arrays = () => {
  const movies = ['Before Sunset', 'Before Sunrise', 'Before Midnight'];
  const books = [
    { bookName: 'A Game of Thrones', year: 1996 },
    { bookName: 'A Clash of Kings', year: 1998 },
    { bookName: 'A Storm of Swords', year: 2000 }
  ]

  return (
    <> 
      <h3>Movies</h3>
      <ul>
        {
          movies.map(movie => <li key={movie}>{movie}</li>)
        }
      </ul>

      <hr />
      <h3>Books</h3>
      <ul>
        {
          books
            .filter(({year}) => year >= 1998)
            .map(({ bookName, year }) => <li key={bookName}>{bookName} - {year}</li>)
        }
      </ul>
    </>
  );
}

export default Arrays;