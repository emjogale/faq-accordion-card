// // Grab all the questions
const questions = document.querySelectorAll(".qanda");
console.log(questions);

questions.forEach((question) => {
	const q = question.querySelector(".question");
	let btn = question.querySelector("button");
	q.addEventListener("click", () => {
		questions.forEach((item) => {
			if (item != q) {
				item.classList.remove("show");
			}
		});

		if (question.classList.contains("show")) {
			console.log("yes it does!!");
			question.classList.remove("show");
		} else {
			question.classList.add("show");
		}
		let expanded = btn.getAttribute("aria-expanded");
		if (expanded == "true") {
			console.log("yep true");
			expanded = "false";
		} else {
			expanded = "true";
		}
		btn.setAttribute("aria-expanded", expanded);
	});
});
