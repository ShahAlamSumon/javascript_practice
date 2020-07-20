class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return this.title +' written by '+ this.author+ ' in '+ this.year;
    }
    getAge(){
        const bookAge = new Date().getFullYear() - this.year;
        return 'Age of '+this.title+' book is '+ bookAge;
    }
}
// Initiat object 
const book1 = new Book('Android dev','Baily',2008);
console.log(book1.getSummary());
