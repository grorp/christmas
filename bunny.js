const makeBunny = () => {
	const bunny = document.createElement("img");
	bunny.src = "https://grorp.github.io/christmas/bunny.svg";
	bunny.width = 150;
	bunny.height = 150;

	bunny.style.position = "absolute";
	bunny.style.top =
		Math.random() * (document.body.clientHeight - bunny.height) + "px";
	bunny.style.left =
		Math.random() * (document.body.clientWidth - bunny.width) + "px";

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
