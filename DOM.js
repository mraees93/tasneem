//const { Jambuddy } = require("./jamBuddy");
const buddy = new Jambuddy();
let notes = buddy.selectNotes();

const randomNotesButton = document.getElementById("getRandomNotes");
const randomNotesParagragh = document.getElementById("randomNotes");
randomNotesButton.addEventListener("click", displayNotes);

const submitAnswerButton = document.getElementById("submitAnswer");
//let correctAnswerMsg = document.getElementById("correctAnswer");
submitAnswerButton.addEventListener("click", displayMsg);

function displayNotes() {
	if (randomNotesParagragh.innerHTML.length === 0) {
		randomNotesParagragh.innerHTML = `${notes}`;
	} else {
		const updatedNotes = buddy.selectNotes();
		notes = updatedNotes;
		randomNotesParagragh.innerHTML = "";
		randomNotesParagragh.innerHTML = updatedNotes;
		document.getElementById("userInput").value = "";
		document.getElementById("results").innerHTML = "";
	}
}

function displayMsg() {
	const userInput = Number(document.getElementById("userInput").value);
	//let answer = buddy.checkAnswer(userInput);
	// console.log(userInput);
	// console.log(buddy.checkAnswer(userInput));
	//let correctMsg = document.getElementById("results").innerHTML;
	//console.log(correctMsg + "hi");
	if (buddy.checkAnswer(userInput)) {
		document.getElementById("results").innerHTML =
			"You got it right .Well Done!";
	} else {
		//console.log("hi");
		document.getElementById("results").innerHTML = "Wrong answer! Try again";
	}
}
//module.exports = { displayNotes, displayMsg };
