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

        return (title + ' by ' + author + ', ' + pages.toString() + ' pages. ' + last)
    }
}



function addBookToLibrary(title, author, pages, read) {
    var book1
}


console.log('hello')