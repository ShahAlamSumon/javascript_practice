// book constructor 
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year; 
}
// get summary method
Book.prototype.getSummary = function(){
    return this.title +' written by '+ this.author+ ' in '+ this.year;
};

// magazine constructor 
function Magazine(title, author, year, month){
    // Inherite book
    Book.call(this,title, author, year) 
    this.month = month;
}
// Inherite prototype
Magazine.prototype = Object.create(Book.prototype);
const mag1 = new Magazine('Tech world','Jemmy','2020','June');
console.log(mag1.getSummary());

