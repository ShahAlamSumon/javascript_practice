// Object of Protos
const bookProtos = {
    getSummary : function(){
        return this.title +' written by '+ this.author+ ' in '+ this.year;
    },
    getAge : function(){
        const bookAge = new Date().getFullYear() - this.year;
        return 'Age of '+this.title+' book is '+ bookAge;
    },
}

// Create object
// const book1 = Object.create(bookProtos);
// book1.author = 'Malkov'
// book1.title = 'Vikings'
// book1.year = 2020
const book1 = Object.create(bookProtos,{
    title : {value : 'Java'},
    author : {value : 'Joy'},
    year : {value : 2010},
});
console.log(book1.getSummary());
console.log(book1.getAge());
