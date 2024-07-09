// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, checkoutTimes, discarded) {
        this.title = title;
        this.author = author;
        this.copyright = copyrightDate;
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
        this.checkoutTimes = checkoutTimes;
        this.discarded = discarded;
    }

    checkout(uses=1) {
        this.checkoutTimes += uses;
    }
 }


class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyrightDate, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(currentYear){
       if (currentYear-this.copyright > 5) {
          this.discarded = 'Yes';
       }
    }
 }
 
 class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyrightDate, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(){
       if (this.timesCheckedOut > 100) {
          this.discarded = 'Yes';
       }
    }
 }
// Declare the objects for exercises 2 and 3 here:
let book = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");
let shuttleManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

// Code exercises 4 & 5 here:

shuttleManual.dispose(2024);
book.dispose(); 
console.log(book, shuttleManual);
book.checkout(5);
console.log(book);
// console.log(book.dispose());
