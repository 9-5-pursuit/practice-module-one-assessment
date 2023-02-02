// Sample Data - Feel free to create your own too!
const sampleArray1 = [1, 2, 3, 4, 5];
const sampleArray2 = ["apple", "banana", "orange", "kiwi", "mango"];

/**
 * Creates an array of the specified size
 * @param {number} size - The size of the array to be created
 * @returns {array} - The newly created array
 */
function createArray(size) {
  // can you creat an array at a specific size
  let nullArr = new Array(size);
  nullArr.fill(null);
  return nullArr;
  // code to create array
}

/**
 * Adds an element to the end of the given array
 * @param {array} arr - The array to which the element will be added
 * @param {*} element - The element to be added
 * @returns {number} - The new length of the array
 */
function addElement(arr, element) {
  // code to add element
  arr.push(element);
  return arr.length;
}

/**
 * Removes an element from the given array at the specified index
 * @param {array} arr - The array from which the element will be removed
 * @param {number} index - The index of the element to be removed
 * @returns {boolean} - True if the element was removed successfully, false otherwise
 */
function removeElement(arr, index) {
  // code to remove element
  if (arr.length === 0) {
    return `Error: The array is empty.`;
  }
  if (arr[index]) {
    let element = arr.splice(index, 1);
    if (!arr.includes(element)) {
      return true;
    }
  } else {
    return `Error: Index out of bounds.`;
  }
}

/**
 * Returns the element at the specified index in the given array
 * @param {array} arr - The array whose element will be returned
 * @param {number} index - The index of the element to be returned
 * @returns {*} - The element at the specified index
 */
function getElement(arr, index) {
  // code to return element

  if (arr[index]) {
    let element = arr.splice(index, 1);
    return element[0];
  } else {
    return `Error: Index out of bounds`;
  }
}

/**
 * Returns the number of elements in the given array
 * @param {array} arr - The array whose length will be returned
 * @returns {number} - The number of elements in the array
 */
function getArrayLength(arr) {
  // code to return array length

  if (!Array.isArray(arr)) {
    return `Error: Input is not an array.`;
  }
  if (arr.length > 0) {
    return arr.length;
  } else {
    return 0;
  }
}

/**
 * Finds the index of the first occurrence of a specified element in the given array
 * @param {array} arr - The array to be searched
 * @param {*} element - The element to be searched for
 * @returns {number} - The index of the first occurrence of the element, -1 if the element is not found
 */
function findElement(arr, element) {
  // code to find element
  if (!element) {
    return `Error: Second argument is not provided`;
  }

  if (!Array.isArray(arr)) {
    return `Error: Input is not an array.`;
    // }else if (arr.indexOf()){
    //   return `Error: Second argument is not provided`
  } else {
    return arr.indexOf(element);
  }
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(element)) {
      return -1;
    }
  }
}

/**
 * Reverses the order of the elements in the given array
 * @param {array} arr - The array to be reversed
 * @returns {array} - The reversed array
 */
function reverseArray(arr) {
  // code to reverse array
  

  if (Array.isArray(arr)) {
    if (arr.length > 0) {
      return arr.reverse();
    }else {
      return `Error: Array is empty.`
    }
    
  } else {
    return `Error: Input is not an array.`;
  }
}

/**
 * Sorts the elements in the given array in ascending order
 * @param {array} arr - The array to be sorted
 * @returns {array} - The sorted array
 */
function sortArray(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        return "Error: Array must only contain numeric elements";
      }
    }
  } else {
    return "Error: Input is not an array";
  }
  let newArr = [];
  // console.log(arr);
  for (let i = 0; i < arr.length + 1; i++) {
    if (i > i - 1) {
      if (i > 0) {
        newArr.push(i);
      }
    }
  }
  return newArr
}

/**
 * Removes duplicate elements from the given array
 * @param {array} arr - The array from which duplicates will be removed
 * @returns {array} - The array with duplicate elements removed
 */
function removeDuplicates(arr) {
  // code to remove duplicates
  h
}

/**
 * Returns a new array that contains a specified number of elements from the given array
 * @param {array} arr - The array from which elements will be selected
 * @param {number} n - The number of elements to be selected
 * @returns {array} - The new array that contains the selected elements
 */
function selectElements(arr, n) {
  // code to select elements
}

module.exports = {
  createArray,
  addElement,
  removeElement,
  getElement,
  getArrayLength,
  findElement,
  reverseArray,
  sortArray,
  removeDuplicates,
  selectElements,
};
