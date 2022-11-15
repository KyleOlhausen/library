let myLibrary = [
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: "not read"
    }
];


const $title = document.querySelector('#title-input');
const $author = document.querySelector('#author-input');
const $pages = document.querySelector('#pages-input');
const $read = document.querySelector('#read-input');
const $submitBtn = document.querySelector('.submit-btn');
const $tbody = document.querySelector('tbody');


$submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
    displayBooks();
    clearForm();
});

function clearForm() 
{
    $title.value = "";
    $author.value = "";
    $pages.value = "";
}


function Book(title, author, pages, read) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBook() 
{
    if($title.value.length === 0 || $author.value.length === 0 || $pages.value.length === 0)
    {
        alert("please fill all fields");
        return;
    }
    const newBook = new Book($title.value, $author.value, $pages.value, $read.value)
    myLibrary.push(newBook);
}


function displayBooks() 
{
    $tbody.textContent = "";
    myLibrary.forEach((book) => 
    {

        let $tr = document.createElement('tr'); 
        let $tTitle = document.createElement('td')
        
        let $tAuthor = document.createElement('td');
        let $tPages = document.createElement('td');
        let $readBtn = document.createElement('button');
        let $tRead = document.createElement('td');
        let $deleteBtn = document.createElement('button');
        let $tDelete = document.createElement('td');

        $deleteBtn.classList.add("btn-delete");
       
        $deleteBtn.dataset.bookTitle = book.title;
        $readBtn.dataset.bookTitle = book.title;

        $tTitle.textContent = book.title;
        $tAuthor.textContent = book.author;
        $tPages.textContent = book.pages;
        $deleteBtn.textContent = "Delete";

        if(book.read == "read")
        {
            $readBtn.textContent = "Read";
        }
        else
        {
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


function findBook(title) 
{
    if(myLibrary.length === 0 || myLibrary === null)
    {
        return;
    }

    return myLibrary.map(e => e.title).indexOf(title);
}


function changeReadStatus(title) {
    let bookIndex = findBook(title);
    
    if(myLibrary[bookIndex].read == "read")
    {
        myLibrary[bookIndex].read = "not read";
    }
    else
    {
        myLibrary[bookIndex].read = "read";
    }
}


function deleteBook(title) 
{
    let bookIndex = findBook(title);
    if (bookIndex === null || bookIndex === undefined) return;

    myLibrary.splice(bookIndex, 1);
}


const $table = document.querySelector('table').addEventListener('click', e => {
    let btnText = e.target.textContent
    if(btnText == "Delete")
    {
        deleteBook(e.target.dataset.bookTitle);
    }
    else if(btnText == "Read" || btnText == "Not read")
    {
        changeReadStatus(e.target.dataset.bookTitle);
    }

    displayBooks();
});



displayBooks();