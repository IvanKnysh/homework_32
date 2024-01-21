const resetActiveSelector = (selector) => {
	document.querySelectorAll(selector).forEach((item) => {
		item.classList.remove("active");
	});
};

document.querySelector("ul").addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		resetActiveSelector("li");

		e.target.classList.add("active");

		document.querySelectorAll(".content .item").forEach((item) => {
			if (e.target.id === item.getAttribute("data-id")) {
				resetActiveSelector(".content .item");
				item.classList.add("active");
			}
		});
	}
});

// typeWriter
const typeWriter = (el) => {
	const textArray = el.innerHTML.split("");
	el.innerHTML = "";
	textArray.forEach((letter, i) =>
		setTimeout(() => (el.innerHTML += letter), 100 * i)
	);
	setInterval(() => typeWriter(el), 8000);
};

typeWriter(document.querySelector("h1"));
