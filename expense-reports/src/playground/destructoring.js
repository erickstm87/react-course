// const person = {
//     age: 30,
//     name: 'tom',
//     location: {
//         city: 'boulder',
//         temperature: '14'
//     }
// };

// const {age, name} = person;

// const {city, temperature: temp} = person.location;

// console.log(`${person.name} is ${person.age}`);

// console.log(`${city} is ${temp} degrees right now`);

const book = {
    title: 'Deep Work',
    author: 'cal newport',
    publisher: {
       //name: 'Penguin'
    }
};

const {name: publisherName = 'couldn\'t tell ya'} = book.publisher;

console.log(publisherName);