myLibrary = {
    books: [
        {
            title: "A Long Walk to Freedom",
            author: "Nelson Mandela",
            copies: 4,
            borrowedStatus: false
        },
        {
            title: "Rise",
            author: "Siya Kolisi",
            copies: 3,
            borrowedStatus: false,
        },
        {
            title: "Systems Thinking",
            author: "Jamshid Gharajedaghi",
            copies: 1,
            borrowedStatus: false
        }],
    borrowBook(book_id) {
        const{books} = this;
        books[book_id].borrowedStatus = true;
        books[book_id].copies--;
        console.log(books[book_id])
       
        
    },
    returnBook(book_id) { 
        const{books} = this;
        books[book_id].borrowedStatus = false;
        books[book_id].copies++;
        console.log(books[book_id])
    },
    listBooks() {
        const {
            books
        } = this
        console.log(books)
        for (let i = 0; i < books.length; i++) {
            console.log(books[i])
        }
    }
}
console.log(myLibrary.returnBook(0))
