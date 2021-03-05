// grab all questions
const questions = document.querySelectorAll(".question");

const arrows = console.log(questions);

// loop through the questions and listen for a click event
for (let question of questions) {
	question.addEventListener("click", (e) => {
		// store the event target in a const
		const et = e.target;
		// select active class
		const active = document.querySelector(".active");
		// when a question is clicked remove the active class from an element which has it
		if (active) {
			active.classList.remove("active");
		}
		//add the active class to the clicked element
		et.classList.add("active");
		//select all the answers with the class a
		const answers = document.querySelectorAll(".a");

		//loop through the answers
		for (let answer of answers) {
			// display the content if the data attribute of the question and content matches
			if (
				answer.getAttribute("data-number") ===
				question.getAttribute("data-number")
			) {
				answer.style.display = "flex";
			}
			// if it's not then hide it
			else {
				answer.style.display = "none";
			}
		}
	});
}
