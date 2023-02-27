import Book from '../dist/modules/books.js';

window.onload = Book.displayAll();

const form = document.querySelector('#form1');
let j = 1;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');

  const book = new Book(title.value, author.value, j += 1);
  Book.add(book);
  Book.displayAll();
  title.value = '';
  author.value = '';
});
