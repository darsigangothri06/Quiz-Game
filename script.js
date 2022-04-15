// Bindind Section...

// Container
var container = document.getElementById("container")

// Start Section
var startBtn = document.getElementById("start")

// Guide Section
var guide = document.getElementById("guide")
var exitBtn = document.getElementById("exit")
var continueBtn = document.getElementById("container")

// Quiz Section
var quiz = document.getElementById("quiz")
var time = document.getElementById("time")

// Quiz Questions
var questionNo = document.getElementById("questionNo")
var questionText = document.getElementById("questionText")

// Options
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")

// Using queryselector
var choice_que = document.querySelectorAll(".choice_que")

// Answer section
var total_correct = document.getElementById("total_correct")
var next_question = document.getElementById("next_question")

// Result Section
var result = document.getElementById("result")
var points = document.getElementById("points")
var quit = document.getElementById("quit")
var startAgain = document.getElementById("startAgain")

//  Initial stated
var index = 0
var timer = 0
var interval = 0

// total points
var correct = 0

// user's answer
var userAnswer = undefined

// Let's start the quiz...

// When START button is clicked, Guide section should display
start.addEventListener("click", () = > {
    start.style.display = "none"
    guide.style.e
})