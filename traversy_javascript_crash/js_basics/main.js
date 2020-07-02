let name = 'Sumon'
let age = 29 

// const full_name = 'Shah, Alam, Sumon'
const alist = ['Batmen ' , 'Ironman' , 'Superman']
alist[3] = 'Spiderman'
alist.push('Wolvarine')
alist.unshift('Halk')
// console.log(full_name.length)
// console.log(full_name.toUpperCase())
// console.log(full_name.toLowerCase())
// console.log(full_name.substring(0,4))
// console.log(full_name.split(', '))
// console.log(alist.indexOf('Superman'))
const person = {
    first_name : 'Shah',
    last_name : 'Alam',
    age : 29,
    hobbies : ['movies','drama','dancing'],
    address : {
        house: 5,
        road : 1,
        block : 'F',
        city : 'Dhaka'
    }
}
// const { address : { city } } = person
// console.log(city)
person.email = 'sacsesumon@gmail.com'
// console.log(person.email)

const todos = [
    {
        id: 1,
        work: 'Attendance',
        check : 'done'
    },
    {
        id: 2,
        work: 'Scrum',
        check : 'not done'
    },
    {
        id: 3,
        work: 'Update Redmine',
        check : 'not done'
    },
    {
        id: 4,
        work: 'Update task',
        check : 'done'
    },
]
// console.log(todos[2].work)
const json_vals = JSON.stringify(todos)
// console.log(json_vals)
// for (let i=0; i<todos.length; i++){
//     console.log('Todo ',todos[i].work, ' printed');
// }
// let i=0;
// while(i<10){
//     console.log('While loops ',i, ' printed');
//     i+=2;
// }
// for (let todo of todos){
//     console.log('Todo ',todo.check, ' printed');
// }
// todos.forEach(function(todo){
//     console.log('Todo ',todo.work, ' printed');
// });
// const todo_text = todos.filter(function(todo){
//     return todo.check === 'done'
// }).map(function(todo){
//     return todo.work
// });
// console.log(todo_text)
// const x = 6;
// const y = 11;
// if (x === 10){
//     console.log('x is 10');
// }else if(x>10){
//     console.log('x is greater then 10');
// }else{
//     console.log('x is not 10');
// };
// if (x === 5 && y === 11){
//     console.log('True');
// }else{
//     console.log('Not True');
// };
// const x = 1;
// const color = x >10 ? 'red':'blue';
// console.log(color);

// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;
// };
    
// function addNumber(num1, num2){
//     return num1+num2
// };
// console.log('Result is ',addNumber(2,4))

// const addNum = (num1 , num2) => num1+num2;
// console.log('Result is ',addNum(2,5))

// todos.forEach((todo) => console.log(todo.work))

// class Doctor {
//     constructor(first_name, last_name, age, speciality) {
//         this.first_name = first_name
//         this.last_name = last_name
//         this.age = age
//         this.speciality = speciality

//     }
//     getFullName() {
//         return this.first_name + ' ' + this.last_name
//     }
// }

// const doctor1 = new Doctor('Mohammad','Nayem',30,'Medicine');
// const doctor2 = new Doctor('Maisam','Sobahan',29,'Cardio');

// console.log(doctor1.getFullName());
// console.log(doctor1);

