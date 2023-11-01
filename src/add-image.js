import kiwi from "./kiwi.webp";
import alt from "./altText.txt";

function addImage() {
	const img = document.createElement("img");
	img.alt = alt;
	img.width = 300;
	img.src = kiwi;

	const body = document.querySelector("body");
	// console.log(body);
	body.appendChild(img);
}

export default addImage;
