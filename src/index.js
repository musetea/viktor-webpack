import helloWorld from "./hello-world.js";
import addImage from "./add-image.js";
import HelloButton from "./components/hello/hello.js";

helloWorld();

document.addEventListener("DOMContentLoaded", ev => {
	console.log(ev);
	addImage();

	const button = new HelloButton();
	button.render();
});
