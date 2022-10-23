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


const $title = document.querySelector('#title-input');
const $author = document.querySelector('#author-input');
const $pages = document.querySelector('#pages-input');
const $read = document.querySelector('#read-input');

const $submitBtn = document.querySelector('#submit-btn');
$submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
    displayBooks();
});

function addBook(book) {
    if($title.value.length === 0 || $author.value.length === 0 || $pages.value.length === 0){
        alert("please fill all fields");
        return;
    }
    const newBook = new Book($title.value, $author.value, $pages.value, $read.value)
    myLibrary.push(newBook);
}

function deleteBook(book) {
    
}


const $tbody = document.querySelector('tbody');

function displayBooks() {
    $tbody.textContent = "";
    myLibrary.forEach((book) => {
        let $tr = document.createElement('tr'); 
        let $tTitle = document.createElement('td')
        $tTitle.textContent = book.title;
        let $tAuthor = document.createElement('td');
        $tAuthor.textContent = book.author;
        let $tPages = document.createElement('td');
        $tPages.textContent = book.pages;
        let $tRead = document.createElement('td');
        $tRead.textContent = book.read;
        $tr.appendChild($tTitle);
        $tr.appendChild($tAuthor);
        $tr.appendChild($tPages);
        $tr.appendChild($tRead);
        $tbody.appendChild($tr);
    });
}

displayBooks();
