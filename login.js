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

Book.prototype.changeRead = function() {
    this.read = !this.read;
    render();
}

function changeReadLib(index) {
    myLibrary[index].changeRead();
    render();
}

function removeBook(index){
    myLibrary.splice(index, 1);
    render();
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

        let readButton = document.createElement('button');
        readButton.setAttribute('class', 'readStatus');
        readButton.onclick = function() {changeReadLib(i)};
        readButton.innerHTML = "Change read status";


        bookDiv.innerHTML = 'Tittle: ' + book.title + 'Author: ' + book.author + 'Pages: ' + book.pages + 'Read: ' + book.read;
        bookDiv.appendChild(removeButton);
        bookDiv.appendChild(readButton);

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



