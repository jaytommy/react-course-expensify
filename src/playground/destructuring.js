// OBJECT DESTRUCTURING

// const person = {
//   //name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Houston',
//     temp: 92
//   }
// };

// const { name='Jay', age } = person;
// console.log(`${name} is ${age}.`);

// const {city, temp} = person.location;
// console.log(`It's ${person.location.temp} in ${person.location.city}.`)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Unknown'} = book.publisher;

// console.log(publisherName);

// ARRAY DESTRUCTURING

const address = ['1299 South Juniper Street', 'Houston', 'Texas', '77002'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['coffee', '$2.00', '$2.50', '$2.75'];

const [food, , medium] = item;

console.log(`A medium ${food} costs ${medium}.`)