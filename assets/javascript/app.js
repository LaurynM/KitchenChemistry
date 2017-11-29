//Declare variables here that need to be available globally
var questions = ["You are making a salad dressing. Which acid will you use?", 
"You are making a soup. Which solvent will you use?", 
"Time to season the food. Which salt will you use?", 
"You are mixing a cocktail. Which alcohol will you use?", 
"Bake a cake for dessert. Which ingredient will you use?", 
];
var choices = {
  0: ["Formic Acid", "Nitrous Acid", "Acetic Acid"],
  1: ["Benzene", "Dihydrogen Monoxide", "Acetone"],
  2: ["Sodium Bisulfate", "Sodium Chloride", "Calcium Chloride"],
  3: ["Methanol", "Propanol", "Ethanol"],
  4: ["Cream of Tartar", "Milk of Magnesia", "Oil of Olay"],
};
var answers = {
  "Acetic Acid" : "That's Vinegar. You made a tasty salad!", 
  "Dihydrogen Monoxide" : "That's Water. You made a tasty soup!", 
  "Sodium Chloride" : "That's Table Salt. You seasoned the food well!", 
  "Ethanol" : "That's Drinking Alcohol. You made a tasty drink!", 
  "Cream of Tartar" : "That's right! You made a tasty cake!", 
};
var time = 15; //15 seconds to read and answer each question
var correct = 0;
var incorrect = 0;
var i = 0;
var clicked;
var intervalId;
var timeUp = 0;
//hide all the divs that will display later
$( ".game" ).hide();
$( "#win-lose" ).hide();
$( "#final" ).hide();

//Functions

function results() {
  $( "#win-lose" ).hide();
  $( ".game" ).hide();
  $( "#final" ).show();
  $( "#correct" ).text(correct);
  $( "#incorrect" ).text(incorrect);
  $( "#timeUp" ).text(5 - timeUp);
}

function victory(){
  clearInterval(intervalId);
  $( ".game" ).hide();
  $( "#win-lose" ).show();
  $( "#win-lose" ).text(answers[clicked]);
  i++;
  var winTimeout = setTimeout(nextQuestion, 3000);
};

function failure(){
  clearInterval(intervalId);
  $( ".game" ).hide();
  $( "#win-lose" ).show();
  $( "#win-lose" ).text("Hmm, that's not it...");
  i++;
  var loseTimeout = setTimeout(nextQuestion, 3000);
};

function outOfTime() {
  clearInterval(intervalId);
  console.log("Didn't answer -->" + questions[i])
  $( ".game" ).hide();
  $( "#win-lose" ).show();
  $( "#win-lose" ).text("Time's up! Your diner walked out.");
  i++;
  timeUp++;
  var winTimeout = setTimeout(nextQuestion, 3000);
};

function countdown() {
  time = 15;
  $( "#clock" ).text(time);//show the time remaining
  intervalId = setInterval(function() {
    time--;
    $( "#clock" ).text(time);//update the time remaining
    if (time == 0){outOfTime()};//if time runs out, run function outOfTime()
  }, 1000)
};

function nextQuestion() {
  if (i == questions.length){
    results();
    return
  }
  //hide the win-lose div
  $( "#win-lose" ).hide();
  //show the game div
  $( ".game" ).show();
  //populate with the text of the current question
  $( "#question" ).text(questions[i]);
  //append the choices
  $( ".selection" ).empty();
  $.each(choices[i], function( index, value ) {
    $( ".selection" ).append("<p class='choice'>" + value + "</p>");
  });
  countdown();
};

function newGame() {
  console.log("begin!");
  //reset these variables
  correct = 0;
  incorrect = 0;
  i = 0;
  nextQuestion();
};

//Function Calls

$(document).on("click", ".choice", function() {
  clicked = $(this).text()
  if (clicked in answers) {
    correct++;
    victory();
  } else {
    incorrect++;
    failure();
  }
});

$( ".start" ).click(function() {
  $( "#intro" ).hide();
  $( "#win-lose" ).hide();
  $( "#final" ).hide();
  newGame();
});