
// selects button to start quiz
var startingButton = document.querySelector("#start-button");

// container holding the main content on the page.
var mainContent = document.querySelector(".main-content");

// selects p text which will write "wrong" or "correct" at the bottom
// of each question
var bottomText = document.querySelector("#bottomText");

// h1 at top left that says view highscores.
// I only use this in the program to take you to the scores page.
var viewHighScoresStart = document.querySelector("#view-highscore");


var timer = document.querySelector("header span");
var time = 75;

// counts how many questions are answered
var questionsAnswered = 0;

// gets highscores array from local storage on reload,
// if there are no highscores, then just assigns
// highscores to an empty array.
var highScores = JSON.parse(localStorage.getItem("highscores"));
highScores = highScores || [];

var questions = [
    "Commonly used data types DO NOT include:",
    "The condition in an if / else statement is enclosed with ________.",
    "Arrays in JavaScript can be used to store ________.",
    "String values must be enclosed within ________ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
];



// Creating questions

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
        questionsAnswered++;
        // run question 2
        createQuestionTwo(questions.shift(), "parenthesis");
    }

    // when the user clicks a WRONG answer
    // do this
    buttonOne.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        // run question 2
        createQuestionTwo(questions.shift(), "parenthesis");

    }

    buttonTwo.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        // run question 2
        createQuestionTwo(questions.shift(), "parenthesis");
    }

    buttonFour.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
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
        questionsAnswered++;
        createQuestionThree(questions.shift(), "all of the above");
    }

    // when the user clicks a WRONG answer
    // do this
    buttonOne.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        createQuestionThree(questions.shift(), "all of the above");
    }

    buttonTwo.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        createQuestionThree(questions.shift(), "all of the above");
    }

    buttonFour.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        createQuestionThree(questions.shift(), "all of the above");
    }

}

function createQuestionThree(question, answer){

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
    buttonOne.textContent = "1. numbers and strings";
    buttonOne.className = "btn";
    buttonHolder.appendChild(buttonOne);

    var buttonTwo = document.createElement("button");
    buttonTwo.textContent = "2. other arrays";
    buttonTwo.className = "btn";
    buttonHolder.appendChild(buttonTwo);

    var buttonThree = document.createElement("button");
    buttonThree.textContent = "3. booleans";
    buttonThree.className = "btn";
    buttonHolder.appendChild(buttonThree);

    var buttonFour = document.createElement("button");
    buttonFour.textContent = "4. " + answer;
    buttonFour.className = "btn";
    buttonHolder.appendChild(buttonFour);


    //When the user clicks the CORRECT button
    // do this
    buttonFour.onclick = function() {
        // changes bottom text p content
        bottomText.textContent = "Correct!";
        questionsAnswered++;
        createQuestionFour(questions.shift(), "quotes");
    }

    // when the user clicks a WRONG answer
    // do this
    buttonOne.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        createQuestionFour(questions.shift(), "quotes");
    }

    buttonTwo.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        createQuestionFour(questions.shift(), "quotes");
    }

    buttonThree.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        createQuestionFour(questions.shift(), "quotes");
    }

}


function createQuestionFour(question, answer){

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
    buttonOne.textContent = "1. commas";
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
    buttonFour.textContent = "4. parenthesis";
    buttonFour.className = "btn";
    buttonHolder.appendChild(buttonFour);


    //When the user clicks the CORRECT button
    // do this
    buttonThree.onclick = function() {
        // changes bottom text p content
        bottomText.textContent = "Correct!";
        questionsAnswered++;
        createQuestionFive(questions.shift(), "console.log");
    }

    // when the user clicks a WRONG answer
    // do this
    buttonOne.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        createQuestionFive(questions.shift(), "console.log");
    }

    buttonTwo.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        createQuestionFive(questions.shift(), "console.log");
    }

    buttonFour.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        createQuestionFive(questions.shift(), "console.log");
    }

}



function createQuestionFive(question, answer){

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
    buttonOne.textContent = "1. commas";
    buttonOne.className = "btn";
    buttonHolder.appendChild(buttonOne);

    var buttonTwo = document.createElement("button");
    buttonTwo.textContent = "2. curly brackets";
    buttonTwo.className = "btn";
    buttonHolder.appendChild(buttonTwo);

    var buttonThree = document.createElement("button");
    buttonThree.textContent = "3. for loops";
    buttonThree.className = "btn";
    buttonHolder.appendChild(buttonThree);

    var buttonFour = document.createElement("button");
    buttonFour.textContent = "4. " + answer;
    buttonFour.className = "btn";
    buttonHolder.appendChild(buttonFour);


    //When the user clicks the CORRECT button
    // do this
    buttonFour.onclick = function() {
        // changes bottom text p content
        bottomText.textContent = "Correct!";
        // when a button is clicked on, questionsAnswered gets 
        // incremented, which now makes it equal five.
        // in the setInterval function which runs every second,
        // It said to check if timer runs out OR questionsAnswered
        // equals five. If you answer all the questions before timer
        // runs out, clearInterval() will run which stops the timer where it is.
        questionsAnswered++;
        
    }

    // when the user clicks a WRONG answer
    // do this
    buttonOne.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        
    }

    buttonTwo.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
        
    }

    buttonThree.onclick = function() {
        bottomText.textContent = "Wrong! Ten seconds have been subtracted.";
        time -= 10;
        questionsAnswered++;
    }

}


function startGame() {

    // removes the p text and start button of the start screen
    document.querySelector("#main-header").remove();
    document.querySelector("main div p").remove();
    document.querySelector("main div button").remove();

    // keeps user from seeing highscores while game is being played
    document.querySelector("#view-highscore").innerHTML = "";
    
    var countdown = setInterval(subtractOneSecond, 1000);

    // subtracts one second from time variable and displays it,
    // also decides when game ends
    function subtractOneSecond() {
        time--;
        timer.textContent = "Time: " + time;
        if(time <= 0 || questionsAnswered >= 5) {
            clearInterval(countdown);
            //makes sure time is not negative when quiz ends.
            // a safeguard, if time is somehow negative, set it to 0.
            if(time < 0) {
                time = 0;
            }
            endGame();
        }
    }

    // This function calls question one,
    // inside of this function, question 2 is called
    // when the user clicks on a button.
    // then in question 2, question 3 will be called, etc.
    createQuestionOne(questions.shift(), "alerts");
    
    

}



function submitScore(event) {

    // must use prevenDefault to keep screen
    // from refreshing after submit.
    event.preventDefault();
    
    //selects value entered into the input box by users.
    var initialsInput = document.querySelector("input").value;

    // error checking
    if(!initialsInput){
        alert("Please enter your initials.");
        return false;
    }
    if(initialsInput.length > 4){
        alert("Maximum of 4 characters.");
        return false;
    }

    // Initials are valid, so save this score to localStorage
    
    // places new score at the beginning of the array
    highScores.unshift(initialsInput + " - " + time);

    // localStorage, can only save strings
    // after we update the array with no score, turn the
    // array into a string and set it in localStorage.
    // where it can be later retrieved and parsed back into an array.
    localStorage.setItem("highscores", JSON.stringify(highScores));

    loadAndShowScores();

}


// page that shows all the scores
function loadAndShowScores() {

    // removes main content and bottom text
    mainContent.innerHTML= "";

    bottomText.remove();

    // creates scores h2
    var scoresHeading = document.createElement("h2");
    scoresHeading.className = "question-header";
    scoresHeading.textContent = "Scores";

    mainContent.appendChild(scoresHeading);

    
    // if highScores is not empty.
    // increment through each score in the highScore array
    // and create a <p>
    if(highScores.length > 0){
        for(var i = 0; i < highScores.length; i++){
            var userScore = document.createElement("p");
            userScore.className = "user-scores"
            userScore.textContent = highScores[i];

            mainContent.appendChild(userScore);
        }
    }

    //create div that holds the buttons at the bottom
    var buttonDiv = document.createElement("div");
    buttonDiv.className = "button-div";

    mainContent.appendChild(buttonDiv);

    //create buttons and append them to the new button div
    var goBackButton = document.createElement("button");
    goBackButton.className = "btn hs-btn";
    goBackButton.textContent = "Go Back";

    buttonDiv.appendChild(goBackButton);


    var clearScoresButton = document.createElement("button");
    clearScoresButton.className = "btn hs-btn";
    clearScoresButton.textContent = "Clear All Scores";

    buttonDiv.appendChild(clearScoresButton);
    

    // what happens when the buttons are clicked on the scores page
    // location.reload() and localStorage.clear() must be put in 
    // functions or else they will bot run without the buttons being clicked.

    // when go back button is clicked, refresh the page
    goBackButton.onclick = function() {location.reload();}

    // when clear all scores button is clicked, this clears
    // the localStorage.
    // the localStorage contains the highScores array.
    clearScoresButton.onclick = function() {
        localStorage.clear();
        alert("All scores were deleted!");
        location.reload();
    }
}


function endGame() {
    // clears everything currently within main content
    mainContent.innerHTML = "";

    // creates all done h2 and appends it to main content
    var allDone = document.createElement("h2");
    allDone.className = "question-header";
    allDone.textContent = "All Done!"

    mainContent.appendChild(allDone);

    // creates and appends the message showing their final score
    var yourFinalScore = document.createElement("p");
    yourFinalScore.className = "final-score";
    yourFinalScore.textContent = "Your final score is: " + time;

    mainContent.appendChild(yourFinalScore);

    // creates form element that will hold the input and submit button
    var formEl = document.createElement("form");
    formEl.className = "highscore-form";

    mainContent.appendChild(formEl);

    //creates and appends text that says enter initials to the new form element
    var enterInitials = document.createElement("p");
    enterInitials.className = "enter-initials";
    enterInitials.textContent = "Enter initials:";

    formEl.appendChild(enterInitials);

    //creates and appends input box to the new form element
    var inputBox = document.createElement("input")
    inputBox.className = "input-box";
    inputBox.setAttribute("type", "text");
    inputBox.setAttribute("placeholder", "Your initials");

    formEl.appendChild(inputBox);

    var submitButton = document.createElement("button")
    submitButton.className = "btn submit-btn";
    submitButton.setAttribute("id", "save-score");
    submitButton.textContent = "Submit";

    formEl.appendChild(submitButton);


    // submit allows user to press submit button or 
    // press enter key. must use prevenDefault to keep screen
    // from refreshing
    formEl.addEventListener("submit", submitScore);
}



//Events

// start the game when the start quiz button is clicked
startingButton.addEventListener("click", startGame);

// When the h1 in the top is clicked it takes you to the scores
// page.
viewHighScoresStart.addEventListener("click", loadAndShowScores);