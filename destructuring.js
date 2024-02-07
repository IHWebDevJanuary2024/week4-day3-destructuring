const myObject = {
    name: "James",
    city: "Barcelona",
    bootcamp: "Data",
    address: {
        street: "Pamplona",
        number: 34,
        zipcode: 9213
    }
};

const onlyName = myObject.name; // This is how we store only one value in the variable
const onlyStreetName = myObject.address.street;

// let or const
// DESTRUCTURING
const { name, city, bootcamp, address } = myObject;

const { number: num, street, zipcode } = myObject.address

// console.log(street, num, zipcode);

// We can also do it with arrays

const myArray = ["Madrid", "Paris", "London", "Berlin", "Rome", "Tokyo", "New York", "Sydney", "Moscow", "Dubai"]

// const [city1, ditto2, city3] = myArray;
const [, ditto2, city3] = myArray;

const city5 = myArray[4] // we can also do this if we just want one variable

console.log(ditto2);

const europeanCampuses = [
    ['madrid', 'es'],
    ['barcelona', 'es'],
    ['berlin', 'de'],
    ['paris', 'fr'],
    ['amsterdam', 'nl'],
    ['lisbon', 'pt'],
];

const [, , , [, campusCity]] = europeanCampuses;

// console.log(campusCity);

const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['puppy', 'kitten', 'bunny'];

// const animals = [reptiles+mammals] NOT BAD...

// CONCAT
// const animals = reptiles.concat(mammals) // that's what we did when we were young 

const animals = ["unicorn", ...reptiles, "Hipo", ...mammals, "cat"]

console.log(animals);


function hello(...things) {
    things.forEach((e) => {
        console.log(e);
    })
}

// hello("dsadsa", 321321, [2,3,55,5])



function getFullName({firstName, lastName}) {
    console.log( `${firstName} ${lastName}`)
}

getFullName({ firstName: 'ana', lastName: 'martinez' });