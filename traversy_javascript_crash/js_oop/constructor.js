// constructor 
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    
}
// get summary method
Book.prototype.getSummary = function(){
    return this.title +' written by '+ this.author+ ' in '+ this.year;
};
//  get age method
Book.prototype.getAge = function(){
    const bookAge = new Date().getFullYear() - this.year;
    return 'Age of '+this.title+' book is '+ bookAge;
};
// revise method
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}
//  initiate an object
const book1 = new Book('python','o raily', 2008);
const book2 = new Book('django', 'jhon', 2001);
const book3 = new Book('odoo','fabian',2010);

// console.log(book2.getAge());
book2.revise(2018)
console.log(book2);