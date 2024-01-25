// Original array
let keyValueArray = [
    ['name', 'John'],
    ['age', 25],
    ['city', 'New York']
  ];
  
  // Create an object from the array
  let convertedObject = Object.fromEntries(keyValueArray)
  // Display the resulting object
  console.log(convertedObject);
  