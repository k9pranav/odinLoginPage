let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        if (read == true){
            var last = 'Has been read.';
        } else {
            var last = 'Has not been read yet.';
        }

        return (title + ' by ' + author + ', ' + pages.toString() + ' pages. ' + last + " ")
    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    render()
}



function render(){
    let libraryBooks = document.getElementById('library');
    libraryBooks.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookDiv = document.createElement('div');

        let removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'removeButton');
        removeButton.onclick = function() {removeBook(i)};
        removeButton.innerHTML = 'Remove Me!';

        bookDiv.innerHTML = book.info();
        bookDiv.appendChild(removeButton);

        libraryBooks.appendChild(bookDiv);
    }
}


function addBookToLibrary() {
    let title = document.getElementById('Tittle').value;
    let author = document.getElementById('Author').value;
    let pages = document.getElementById('Pages').value;
    let read = document.getElementById('Read').checked;
 
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();

}

document.querySelector('#newBookForm').addEventListener('submit', function(event){
    event.preventDefault();
    addBookToLibrary();
})



