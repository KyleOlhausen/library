let myLibrary = [
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: "read"
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
const $tbody = document.querySelector('tbody');


$submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
    displayBooks();
    clearForm();
});

function clearForm() {
    $title.value = "";
    $author.value = "";
    $pages.value = "";
}


function addBook(book) {
    if($title.value.length === 0 || $author.value.length === 0 || $pages.value.length === 0){
        alert("please fill all fields");
        return;
    }
    const newBook = new Book($title.value, $author.value, $pages.value, $read.value)
    myLibrary.push(newBook);
}







//need to add a way to select a book
//using i, add a class of i to each new element
//to delete remove anything with i class
//to change read status find i class and change the read btn.textContent
function displayBooks() {
    $tbody.textContent = "";
    myLibrary.forEach((book, i) => {

        let $tr = document.createElement('tr'); 
        let $tTitle = document.createElement('td')
        let $tAuthor = document.createElement('td');
        let $tPages = document.createElement('td');
        let $readBtn = document.createElement('button');
        let $tRead = document.createElement('td');
        let $deleteBtn = document.createElement('button');
        let $tDelete = document.createElement('td');
       
        $tTitle.textContent = book.title;
        $tAuthor.textContent = book.author;
        $tPages.textContent = book.pages;
        $deleteBtn.textContent = "Delete";

        if($read.value){
            $readBtn.textContent = "Read";
        }
        else{
            $readBtn.textContent = "Not read";
        }

        $tr.appendChild($tTitle);
        $tr.appendChild($tAuthor);
        $tr.appendChild($tPages);
        $tRead.appendChild($readBtn);
        $tr.appendChild($tRead);
        $tDelete.appendChild($deleteBtn);
        $tr.appendChild($tDelete);

        $tbody.appendChild($tr);
    });
}



function changeReadStatus() {

}













function deleteBook(book) {
    
}



displayBooks();