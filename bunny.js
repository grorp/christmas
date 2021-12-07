const makeBunny = () => {
	const bunny = document.createElement("img");
	bunny.src = "https://grorp.github.io/christmas/bunny.svg";
	bunny.width = 150;
	bunny.height = 150;

	bunny.style.position = "absolute";
	bunny.style.left =
		Math.random() * (document.documentElement.scrollWidth - bunny.width) +
		"px";
	bunny.style.top =
		Math.random() * (document.documentElement.scrollHeight - bunny.height) +
		"px";

	bunny.style.zIndex = 9998;

	const handleClick = () => {
		bunny.remove();

		const audio = document.createElement("audio");
		audio.src = "https://grorp.github.io/christmas/giggle.wav";
		audio.addEventListener("ended", makeBunny);
		audio.play();
	};
	bunny.addEventListener("click", handleClick);

	document.body.appendChild(bunny);
};

makeBunny();
