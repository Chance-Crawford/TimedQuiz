
// selects button to start quiz
var startingButton = document.querySelector("#start-button");

var mainContent = document.querySelector(".main-content");

// selects p text which will write "wrong" or "correct" at the bottom
// of each question
var bottomText = document.querySelector("#bottomText");

var timer = document.querySelector("header span");
var time = 75;

var questions = [
    "Commonly used data types DO NOT include:",
    "The condition in an if / else statement is enclosed with ________.",
    "Arrays in JavaScript can be used to store ________."
];


function createQuestionOne(question, answer){

    // clears everything currently within main content
    mainContent.innerHTML = "";

    // creates question h2 and appends it to main content
    var questionHeader = document.createElement("h2");
    questionHeader.textContent = question;
    questionHeader.className = "question-header";

    mainContent.appendChild(questionHeader);


    // creates div which holds the buttons so that they
    // can be placed on top of eachother, and appends that
    // div to main content below the h2.
    var buttonHolder = document.createElement("div");
    buttonHolder.className = "button-holder";

    mainContent.appendChild(buttonHolder);


    // creates each new button and appends the button
    // to the button holder div.
    var buttonOne = document.createElement("button");
    buttonOne.textContent = "1. strings";
    buttonOne.className = "btn";
    buttonHolder.appendChild(buttonOne);

    var buttonTwo = document.createElement("button");
    buttonTwo.textContent = "2. booleans";
    buttonTwo.className = "btn";
    buttonHolder.appendChild(buttonTwo);

    var buttonThree = document.createElement("button");
    buttonThree.textContent = "3. " + answer;
    buttonThree.className = "btn";
    buttonHolder.appendChild(buttonThree);

    var buttonFour = document.createElement("button");
    buttonFour.textContent = "4. numbers";
    buttonFour.className = "btn";
    buttonHolder.appendChild(buttonFour);

    // gives the top gray border and class styles to the bottom text
    // <p>. one that says "correct" or "wrong".
    bottomText.className = "bottom-text";


    //When the user clicks the CORRECT button
    // do this
    buttonThree.onclick = function() {
        // changes bottom text p content
        bottomText.textContent = "Correct!";
        // run question 2
        createQuestionTwo(questions.shift(), "parenthesis");
    }

    // when the user clicks a WRONG answer
    // do this
    buttonOne.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        // run question 2
        createQuestionTwo(questions.shift(), "parenthesis");

    }

    buttonTwo.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        // run question 2
        createQuestionTwo(questions.shift(), "parenthesis");
    }

    buttonFour.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        //run question 2
        createQuestionTwo(questions.shift(), "parenthesis");
    }

}

function createQuestionTwo(question, answer){

    // clears everything currently within main content
    mainContent.innerHTML = "";
    
    // creates question h2 and appends it to main content
    var questionHeader = document.createElement("h2");
    questionHeader.textContent = question;
    questionHeader.className = "question-header";

    mainContent.appendChild(questionHeader);


    // creates div which holds the buttons so that they
    // can be placed on top of eachother, and appends that
    // div to main content below the h2.
    var buttonHolder = document.createElement("div");
    buttonHolder.className = "button-holder";

    mainContent.appendChild(buttonHolder);


    // creates each new button and appends the button
    // to the button holder div.
    var buttonOne = document.createElement("button");
    buttonOne.textContent = "1. quotes";
    buttonOne.className = "btn";
    buttonHolder.appendChild(buttonOne);

    var buttonTwo = document.createElement("button");
    buttonTwo.textContent = "2. curly brackets";
    buttonTwo.className = "btn";
    buttonHolder.appendChild(buttonTwo);

    var buttonThree = document.createElement("button");
    buttonThree.textContent = "3. " + answer;
    buttonThree.className = "btn";
    buttonHolder.appendChild(buttonThree);

    var buttonFour = document.createElement("button");
    buttonFour.textContent = "4. square brackets";
    buttonFour.className = "btn";
    buttonHolder.appendChild(buttonFour);


    //When the user clicks the CORRECT button
    // do this
    buttonThree.onclick = function() {
        // changes bottom text p content
        bottomText.textContent = "Correct!";
    }

    // when the user clicks a WRONG answer
    // do this
    buttonOne.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;

    }

    buttonTwo.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
    }

    buttonFour.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
    }

}

function startGame() {

    // removes the p text and start button of the start screen
    document.querySelector("#main-header").remove();
    document.querySelector("main div p").remove();
    document.querySelector("main div button").remove();
    
    var countdown = setInterval(subtractOneSecond, 1000);

    // subtracts one second from time variable and displays it,
    // also decides when game ends
    function subtractOneSecond() {
        time--;
        timer.textContent = "Time: " + time;
        if(time <= 0 || questions.length <= 0) {
            clearInterval(countdown);
            endGame();
        }
    }

    // This function calls question one,
    // inside of this function, question 2 is called
    // when the user clicks on a button.
    // then in question 2, question 3 will be called, etc.
    createQuestionOne(questions.shift(), "alerts");
    
    

}

function endGame() {
    // clears everything currently within main content
    mainContent.innerHTML = "";
    
}

//events
startingButton.addEventListener("click", startGame);