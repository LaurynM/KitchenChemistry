//Declare variables here that need to be available globally
var questions = ["You are making a salad dressing. Which acid will you use?", 
  "You are making a soup. Which solvent will you use?", 
  "Time to season the food. Which salt will you use?", 
  "You are mixing a cocktail. Which alcohol will you use?", 
  "Bake a cake for dessert. Which ingredient will you use?", 
  ];
var choices = {
  1: ["Formic Acid", "Nitrous Acid", "Acetic Acid"],
  2: ["Benzene", "Dihydrogen Monoxide", "Acetone"],
  3: ["Sodium Bisulfate", "Sodium Chloride", "Calcium Chloride"],
  4: ["Methanol", "Propanol", "Ethanol"],
  5: ["Cream of Tartar", "Milk of Magnesia", "Oil of Olay"],
};
var answers = {
  "Acetic Acid" : "That's Vinegar. You made a tasty salad!", 
  "Dihydrogen Monoxide" : "That's Water. You made a tasty soup!", 
  "Sodium Chloride" : "That's Table Salt. You seasoned the food well!", 
  "Ethanol" : "That's Drinking Alcohol. You made a tasty drink!", 
  "Cream of Tartar" : "That's right! You made a tasty cake!", 
};
var time = 30; //30 seconds to read and answer each question
var correct = 0;
var incorrect = 0;


// //  Step 2: do the following between the --- comments
// //  after 5 seconds, execute the fiveSeconds function
// //  after 10 seconds, execute the tenSeconds function
// //  after 15 seconds, execute the timeUp function
// // ---------------------
//   //CODE STEP TWO HERE
//   var fiveTimeout = setTimeout(fiveSeconds, 5000);
//   var tenTimeout = setTimeout(tenSeconds, 10000);
//   var fifteenTimeout = setTimeout(timeUp, 15000);
// // ---------------------


// // Step 3:
// // Fill in the blanks to these functions.
// function fiveSeconds() {

//   // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
//   $('#time-left').append('<h2>About 10 Seconds Left</h2>');
//   // console log 10 seconds left
//   console.log('10 seconds left');
// }


// function tenSeconds() {

//   // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
//   $('#time-left').append('<h2>About 5 Seconds Left</h2>');
//   // console log 5 seconds left
//   console.log('5 seconds left');

// }


// function timeUp() {

//   // in the element with an id of time-left add an h2 saying Time's Up!
//   $('#time-left').append("<h2>Time's Up</h2>");
//   // console log done
//   console.log('done');

// }

function newGame() {
  console.log("begin!");
  //reset these variables
  correct = 0;
  incorrect = 0;

}


$( "#start" ).click(function() {
  $( "#intro" ).hide();
  newGame();
});