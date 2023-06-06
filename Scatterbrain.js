// Megan Boyer - CSC256 Final Project: 'Scatterbrain' memory game - 5/23/2023

//////////////// FUNCTIONS FOR WELCOME PAGE //////////////////////////////////

// Function to change the color of the play button when the user hovers over it.
function changeWelcomeButton(){
        document.getElementById('toGameButton').style.color='purple';
}

// Function to revert the color of the button back to the original when user stops hovering.
function revertWelcomeButton(){
    document.getElementById('toGameButton').style.color='black';
}

///////////////// FUNCTIONS FOR GAME PAGE //////////////////////////////////////

// Function to change the color of the play button when the user hovers over it.
function changePlayButton(){
    document.getElementById('startGameButton').style.color='purple';
}

// Function to revert the color of the button back to the original when user stops hovering.
function revertPlayButton(){
document.getElementById('startGameButton').style.color='black';
}

// Function to change the color of the get results button on hover.
function changeGetResultsButton(){
document.getElementById('getResultsButton').style.color='purple';
}

// Function to revert the color of the button back to the original when user stops hovering.
function revertGetResultsButton(){
    document.getElementById('getResultsButton').style.color='black';
}

////////////// CODE FOR WRITING THE ARRAY/PHRASE ////////////////////////////////////

// Array to hold othe words to guess for level one.
let levelOne = ['My fat grey tabby cat is laying on the brown leather couch to the right of the window.'];

// Function to execute onclick and write the array to the page when user clicks play button.
function displayPhrase1(){
    // Create a new paragraph element and assign it to a variable 'thePhrase'.
    let thePhrase = document.createElement('p');
    // Make this new paragraph a child element/specify where it goes.
    document.getElementById("Instructions").appendChild(thePhrase);
    // Insert the array into the 'thePhrase' variable.
    document.getElementById('Instructions').innerHTML = levelOne;
    // Change the style of the p element to display it.
    document.getElementById("Instructions").style.display='block';
    // Show the header that says 'remember the following:'
    document.getElementById('Header').style.display='block';
}

////////////////// CODE FOR TIMER //////////////////////////////////////

// Declare variable 'givenTime' to represent the initial time given to player.
let timeLeft = 30;
// Declare a new variable to hold space for the timer.
let timer = document.getElementById('timer');
// Declare variable to hold the delay and countdown function.
let timerID = setInterval(function Countdown(){
    // If there is no time left or time left = 0.
    if(timeLeft == 0){
        // Clear the timer.
        clearTimeout(timerID);
        // Hide the paragraph element with ID 'instructions'.
        document.getElementById("Instructions").style.display='none';
        // Hide the timer.
        document.getElementById('timer').style.display='none';
        // Hide the play button.
        document.getElementById('startGameButton').style.display='none';
        // Hide the h3 tag that says 'remember the following:'
        document.getElementById('Header').style.display='none';
        // Hide the notes about the game.
        document.getElementById('Note').style.display='none';
        // Display the quiz form.
        document.getElementById('quiz').style.display='block';
        // Display the 'Get Results!' button.
        document.getElementById('getResultsButton').style.display='block';
    }
    // If the timer has not reached 0: 
     else{
        // Display the seconds remaining
        timer.innerHTML = 'Seconds Remaining: ' + timeLeft;
        // Decrement time left.
        timeLeft--;
    } 
    // wait one second.
}, 1000);

///////////// CODE FOR FORM SUBMIT ////////////////////

// Function to run onclick that navigates to the Results.html page.
 function submitForm(){
    location.href="Results.html";
 }

 // Function to validate responses.
 function validateResponses(){
    // Validate cat color response.
    if(document.quiz.catColors.value == "Grey"){
        return true; 
    }
    else if(document.quiz.catColors.value != "Grey"){
        return false;
    }
    // Validate couch color response.
    if(document.quiz.couchColors.value == "Brown"){
        return true; 
    }
    else if(document.quiz.couchColors.value != "Brown"){
        return false;
    }
    // Validate surrounding areas response.
    if (document.quiz.surroundingAreas.value == "Window"){
        return true;
    }
    else if(document.quiz.surroundingAreas.value != "Window"){
        return false;
    }   
}



   