// Grab all the questions
const questions = document.querySelectorAll(".q-and-a");

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
