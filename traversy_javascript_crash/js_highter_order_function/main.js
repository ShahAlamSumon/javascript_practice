const companies = [
    {name : 'Apple', category : 'Technology', start:1991 , end : 2020},
    {name : 'Google', category : 'Technology', start:1992 , end : 2020},
    {name : 'Amazon', category : 'Technology', start:1999 , end : 2020},
    {name : 'ACI', category : 'Retail', start:1988 , end : 2020},
    {name : 'LankaBangla', category : 'Finance', start:1988 , end : 2020},
    {name : 'HSBC', category : 'Finance', start:1980 , end : 2020},
    {name : 'Toyota', category : 'Auto', start:1996 , end : 2020},
    {name : 'Rangs', category : 'Retail', start:1995 , end : 2020},
]

const ages = [29,28,21,32,32,40,24,25]
// for Loop
// for (let i=0; i<companies.length; i++){
//     console.log(companies[i]);
// }

// for each
// companies.forEach(function(company){
//     console.log(company)
// })

// filter
// filter in loop by condition
// let canDrink = []
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=30){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);
// filter function
// const canDrink = ages.filter(function(age){
//     if(age>=26){
//         return true;
//     }
// })
// console.log(canDrink)
// inline
// const canDrink = ages.filter(age => age >= 26 );
// console.log(canDrink)
// filter retail company
// const retailCompany = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });
// console.log(retailCompany)
// inline retail comapny
// const retailCompany = companies.filter(company => company.category === 'Retail');
// console.log(retailCompany);

// map
// const companyNames = companies.map(function(comapny){
//     return comapny.name;
// })
// console.log(companyNames);
// const agesSqur = ages.map(age => Math.sqrt(age)).map(age => age*3)
// console.log(agesSqur);
// inline
// const companyNames = companies.map(comapny => comapny.name);
// console.log(companyNames);

// sort
// const sortCompanies = companies.sort(function(c1,c2){
//     if (c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// const sortCompanies = companies.sort((a , b )=>(a.start > b.start ? 1: -1));
// console.log(sortCompanies);
// const sortAges = ages.sort((a,b) => b-a )
// console.log(sortAges);

// reduce
// let ageSum = 0;
// for (let i = 0; i<ages.length;i++ ){
//     ageSum += ages[i];
// }
// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);
// const ageSum = ages.reduce((total, age) => total+age, 0);
// console.log(ageSum);
// total year for all companies
// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// }, 0 );
// const totalYears = companies.reduce((total,company)=> total+(company.end - company.start),0);
// console.log(totalYears);

// combine methods
const combine = ages
.map(age => age *2)
.filter(age => age=>50)
.sort((a,b)=> a- b)
.reduce((a,b)=>a+b,0);
console.log(combine);
