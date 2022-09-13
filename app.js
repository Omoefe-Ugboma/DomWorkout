// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() { }

// Add Book To List
UI.prototype.addBookList = function (book) {
    const list = document.getElementById('book-list');

    // create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row)
}

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

    // Validate
    if (title === '' || author === '' || isbn === '') {
        // Error
        ui.showAlert('Please fill in all fields', 'error');
    } else {

    }

    console.log(ui);

    // Add book to list
    ui.addBookList(book);




    e.preventDefault();
})