let snowflakes = [];

const updateSnowflake = (snowflake) => {
	snowflake.style.width = snowflake.size + "px";
	snowflake.style.height = snowflake.size + "px";

	snowflake.style.position = "absolute";
	snowflake.style.zIndex = 999999;
	snowflake.style.left = snowflake.position.x + "px";
	snowflake.style.top = snowflake.position.y + "px";

	snowflake.style.opacity = snowflake.opacity;
	if (snowflake.removed) {
		snowflake.remove();
	}
};

const addSnowflake = () => {
	const snowflake = document.createElement("img");
	snowflake.src = "snowflake.svg";
	snowflake.size = Math.random() * 50 + 25;

	snowflake.initialPosition = {
		x: Math.random() * document.body.clientWidth,
		y: -snowflake.size,
	};
	snowflake.position = {
		...snowflake.initialPosition,
	};
	snowflake.sinOffset = Math.random() * Math.PI;

	snowflake.opacity = 1;
	snowflake.removed = false;

	updateSnowflake(snowflake);
	document.body.appendChild(snowflake);
	snowflakes.push(snowflake);
};

let timeAddSnowflake = null;

let timeLast = performance.now();
const animate = () => {
	const timeNow = performance.now();
	const timeDelta = timeNow - timeLast;

	for (let snowflake of snowflakes) {
		snowflake.position.x =
			snowflake.initialPosition.x +
			Math.sin(timeNow * 0.001 + snowflake.sinOffset) * 100;
		snowflake.position.y = snowflake.position.y + timeDelta * 0.2;

		const distance =
			document.body.clientHeight -
			(snowflake.position.y + snowflake.size + 10);
		snowflake.opacity = (distance < 100 && distance / 100) || 1;

		if (distance < 0) {
			snowflake.removed = true;
		}

		updateSnowflake(snowflake);
	}

	snowflakes = snowflakes.filter((snowflake) => !snowflake.removed);

	if (timeNow > timeAddSnowflake) {
		addSnowflake();
		timeAddSnowflake = null;
	}
	if (!timeAddSnowflake) {
		timeAddSnowflake = timeNow + 100;
	}

	timeLast = timeNow;
	requestAnimationFrame(animate);
};
requestAnimationFrame(animate);
