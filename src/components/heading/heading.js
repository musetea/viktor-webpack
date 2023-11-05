import "./heading.scss";

class Heading {
	constructor(title) {
		this.title = title;
	}
	render(parent) {
		const h1 = document.createElement("h1");
		h1.innerHTML = "Webpack is awesome" + this.title + " Page";

		parent.appendChild(h1);
	}
}

export default Heading;
