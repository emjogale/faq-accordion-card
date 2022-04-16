// Grab all the questions
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
	const q = question.querySelector(".question");
	let btn = question.querySelector("button");
	console.log(question);

	q.addEventListener("click", () => {
		questions.forEach((item) => {
			if (item != q) {
				item.classList.remove("show");
				console.log();
			}
		});

		if (question.classList.contains("show")) {
			question.classList.remove("show");
		} else {
			question.classList.add("show");
		}
		let expanded = btn.getAttribute("aria-expanded");
		if (expanded == "true") {
			expanded = "false";
		} else {
			expanded = "true";
		}
		btn.setAttribute("aria-expanded", expanded);
	});
});
