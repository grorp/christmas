let counter = 0;

const makeBunny = () => {
	const bunny = document.createElement("img");
	bunny.src = "https://grorp.github.io/christmas/bunny.svg";
	bunny.size = 150;

	bunny.style.width = bunny.size + "px";
	bunny.style.height = bunny.size + "px";

	bunny.style.position = "absolute";
	bunny.style.left =
		Math.random() * (document.documentElement.scrollWidth - bunny.size) +
		"px";
	bunny.style.top =
		Math.random() * (document.documentElement.scrollHeight - bunny.size) +
		"px";

	bunny.style.zIndex = 9998;

	const handleClick = () => {
		bunny.remove();
		counter = counter + 1;

		if (counter < 10) {
			const audio = document.createElement("audio");
			audio.src = "https://grorp.github.io/christmas/giggle.wav";
			audio.addEventListener("ended", makeBunny);
			audio.play();
		} else {
			counter = 0;

			const audio = document.createElement("audio");
			audio.src = "https://grorp.github.io/christmas/applause.wav";
			audio.addEventListener("ended", () => {
				confetti = false;
				makeBunny();
			});
			confetti = true;
			audio.play();
		}
	};
	bunny.addEventListener("click", handleClick);

	document.body.appendChild(bunny);
};

makeBunny();
