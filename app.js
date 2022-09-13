// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() { }

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {

    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
    // console.log(title, author, isbn)

    // Instance of Book
    const book = new Book(title, author, isbn);
    // console.log(book);

    // Instance of UI
    const ui = new UI();





    e.preventDefault();
})