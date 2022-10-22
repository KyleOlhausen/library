

const title = document.querySelector('#title-input');
const author = document.querySelector('#author-input');
const pages = document.querySelector('#pages-input');
const read = document.querySelector('#read-input');

const books = document.querySelector('.books');

const submitBtn = document.querySelector('button');


submitBtn.addEventListener('click', addBook);




let myLibrary = [
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: false
    }
];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBook() {
    let newBook = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(newBook);
    displayBooks();


}


function displayBooks() {
    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        const cardTitle = document.createElement('p');
        const cardAuthor = document.createElement('p');
        const cardPages = document.createElement('p');
        const cardRead = document.createElement('button');
        const cardRemove = document.createElement('button');

        bookCard.classList.add('book-card');

        cardTitle.textContent = book.title;
        cardAuthor.textContent = book.author;
        cardPages.textContent = book.pages;
        cardRead.textContent = book.read;

        bookCard.appendChild(cardTitle);
        bookCard.appendChild(cardAuthor);
        bookCard.appendChild(cardPages);
        bookCard.appendChild(cardRead);
        bookCard.appendChild(cardRemove);
        books.appendChild(bookCard);
    });
}


function deleteBook(book) {
    
}

