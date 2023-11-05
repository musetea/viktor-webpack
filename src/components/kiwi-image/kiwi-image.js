import Kiwi from "./kiwi.webp";
import "./kiwi-image.scss";

class KiwiImage {
	constructor() {}

	/**
        beforebegin': Before the targetElement itself.
        'afterbegin': Just inside the targetElement, before its first child.
        'beforeend': Just inside the targetElement, after its last child.
        'afterend': After the targetElement itself.
     * @param {*} parent 
     */
	render(parent, position = "afterbegin") {
		const img = document.createElement("img");
		img.src = Kiwi;
		img.alt = "Kiwi";
		img.classList.add("kiwi-image");

		parent.insertAdjacentElement(position, img);
	}
}

export default KiwiImage;
