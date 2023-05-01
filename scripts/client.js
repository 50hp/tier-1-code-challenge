/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log('Step 0 complete! client.js loaded!');
            
// Write your code here!

// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;
console.log('1.')

let highScore = 29;
console.log(highScore);

// 2. Make a new empty array called myScrabbleTiles.
console.log('2.')

let myScrabbleTiles = [];
console.log(myScrabbleTiles);

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
console.log('3.');

myScrabbleTiles = [{ tile: 'N', score: 1 },
                   { tile: 'K', score: 5 },
                   { tile: 'Z', score: 10 },
                   { tile: 'X', score: 8 },
                   { tile: 'D', score: 2 },
                   { tile: 'A', score: 1 }]
console.log(myScrabbleTiles);

// 4. Remove the last tile from myScrabbleTiles.
console.log('4.');

myScrabbleTiles.pop();
console.log(myScrabbleTiles);


// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
console.log('5.');

myScrabbleTiles.push( { tile: 'F', score : 4 } );
console.log(myScrabbleTiles);


// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop and return the sum of all the scores in the given array.
console.log('6.');

function sumTiles( anArray ) {
  console.log( 'in sumTiles' );
  let sum = 0;

  for (let i of anArray){
   sum += i.score;

  }
  return sum;

}

//Test Call
console.log( sumTiles( myScrabbleTiles ) );

// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".
console.log('7.');

let myScore = sumTiles( myScrabbleTiles );
console.log( myScore );



// 8. Check whether or not your score is higher than the highScore.
console.log('8.');

if ( myScore > highScore ){
    highScore = myScore;
    console.log( highScore );

    console.log('I beat the High Score!!');

}else if ( myScore < highScore ){
    console.log("I didn't beat the high score :( .");
}else {
    console.log('I tied the high score.')
}
// 8-1 If your score is higher, change highScore to the new high score.


// DONE!