let myLibrary = [
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: "read"
    }
];

function Book(title, author, pages, read) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


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







//need to add a way to select a book
//using i, add a class of i to each new element
//to delete remove anything with i class
//to change read status find i class and change the read btn.textContent
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
       
        //these are to find the title from btn.dataset.bookTitle
        $deleteBtn.dataset.bookTitle = book.title;
        $readBtn.dataset.bookTitle = book.title;

        $tTitle.textContent = book.title;
        $tAuthor.textContent = book.author;
        $tPages.textContent = book.pages;
        $deleteBtn.textContent = "Delete";

        if($read.value)
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




const $table = document.querySelector('table').addEventListener('click', e => {
    if(e.target.textContent == "Delete")
    {
        deleteBook(e.target.dataset.bookTitle);
    }
    //else if textContent = "Read/not read"
});




// function changeReadStatus() {
//     if(.textContent === "Read"){
//         .textContent = "Not Read";
//     }
//     else{
//         .textContent = "Read";
//     }
// }



function findBook(title) 
{
    if(myLibrary.length === 0 || myLibrary === null)
    {
        return;
    }

    return myLibrary.map(e => e.title).indexOf(title);
}


function deleteBook(title) 
{
    let bookIndex = findBook(title);
    if (bookIndex === null || bookIndex === undefined) return;

    myLibrary.splice(bookIndex, 1);
    displayBooks();
}



displayBooks();