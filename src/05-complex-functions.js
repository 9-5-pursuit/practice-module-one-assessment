const { people } = require("../data/people.js");
const { animals } = require("../data/animals.js");
const { books } = require("../data/books.js");

console.log(people, animals, books);

/**
 * Prints out the name, age, hobbies and address of each person in the data array
 * @param {Array} data - An array of objects representing people with name, age, hobbies and address properties
 */
function printPersonData(data) {}

/**
 * Updates the address of a person in the data array
 * @param {Array} data - An array of objects representing people with name, age, hobbies and address properties
 * @param {string} name - The name of the person to update
 * @param {Object} newAddress - The new address of the person, containing street, city, state, and zip properties
 */
function updateAddress(data, name, newAddress) {}

/**
 * Adds a new person object to the data array
 * @param {Array} data - An array of objects representing people with name, age, hobbies and address properties
 * @param {string} name - The name of the new person
 * @param {number} age - The age of the new person
 * @param {Array} hobbies - The hobbies of the new person
 * @param {Object} address - The address of the new person, containing street, city, state, and zip properties
 */
function addNewPerson(data, name, age, hobbies, address) {}

/**
 * Calculates the average age of all people in the data array
 * @param {Array} data - An array of objects representing people with name, age, hobbies and address properties
 * @returns {number} - The total age of all people in the data array
 */
function averageAge(data) {}

/**
 * Counts how many people share the same hobbies in the data array
 * @param {Array} data - An array of objects representing people with name, age, hobbies and address properties
 * @returns {Object} - An object with the hobbies as keys and the number of people who have that hobby as the value
 */
function countSharedHobbies(data) {}

/**
 * Returns a string describing the animal that matches the given name
 * @param {string} animalName - The name of the animal to look for
 * @param {Object} animalData - The object containing the animal data
 * @return {string} - A string describing the animal
 */

// FORMAT
// A Lion is a Mammal that lives in the Savannah. It is a Carnivore that eats gazelles, zebras, buffaloes. It has a Golden color, is 4 ft tall, and weighs 400 lbs. It has a mane, tail, and large paws. It lives in Pride and hunts in stalking, chasing way. It migrates to Africa, Middle East

function getAnimalDescription(animalName, animalData) {}

/**
*
* getAllBookAuthors()
* Returns all of the authors from an array of books. If the inputted books array is empty, return [].
* @param {Object[]} books - An array of books.
* @returns {string[]} An array of strings, which are book authors.
* EXAMPLE:
* getAllBookAuthors(books);
* //> [
    "J.K. Rowling",
    "Stephen King",
    "Jane Austen",
    "Mark Twain",
    "Leo Tolstoy",
    "Margaret Atwood",
    "George Orwell",
    "Harper Lee",
    "F. Scott Fitzgerald",
    "Ernest Hemingway",
  ];
*/
function getAllBookAuthors(books) {}

module.exports = {
  printPersonData,
  updateAddress,
  addNewPerson,
  averageAge,
  countSharedHobbies,
  getAnimalDescription,
  getAllBookAuthors,
};
