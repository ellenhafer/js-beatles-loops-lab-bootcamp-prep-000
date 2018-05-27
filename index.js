// Create a function theBeatlesPlay, which accepts two array parameters
function theBeatlesPlay(musicians, instruments){
  // Create an empty array stored in a variable
  var arr = [];
  // Create a for loop which loops over the musicians array
  for(let i = 0; i < musicians.length; i++) {
    // Add string to empty array
    arr.pop(`${musicians[i]} plays ${instruments[i]}`)
  }
  // Return the new array
  return arr;
}
// The function body should contain an empty array stored in a variable
// The function should also contain a for loop which loops over the array of musicians
// The first time through the loop, the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: "John Lennon plays guitar"
// This string should be added to the empty array you created.
// The loop should make the same sentence for every member of the musicians array.
// The function should return the array of new strings.