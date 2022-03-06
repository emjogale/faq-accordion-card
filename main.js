// // Grab all the questions
const questions = document.querySelectorAll(".qanda");
console.log(questions);

// add a function to all questions
questions.forEach((question) => {
	const q = question.querySelector(".question");
	console.log(q);
	q.addEventListener("click", () => {
		questions.forEach((item) => {
			if (item != q) {
				item.classList.remove("show");
			}
		});
		question.classList.toggle("show");
	});
});
