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
// Clear Fields
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// show alert
UI.prototype.showAlert = function (message, className) {
    // Create div
    const div = document.createElement('div');
    // add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
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
        console.log(ui);

        // Add book to list
        ui.addBookList(book);

        // Show success
        ui.showAlert('Book Added!', 'success')
        // clear fields
        ui.clearFields();
    }
    e.preventDefault();
})

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {

    // Instantiate UI
    const ui = new UI();

    // Delete book
    ui.deleteBook(e.target);

    //  show success
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});