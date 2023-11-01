// import "./hello.css";
import "./hello.scss";

class HelloButton {
	buttonCssClass = "hello-button";
	textCssClass = "hello-text";

	render() {
		const button = document.createElement("button");
		button.innerHTML = "Hello world";
		button.classList.add(this.buttonCssClass);
		button.onclick = () => {
			const p = document.createElement("p");
			p.textContent = "Hello World";
			p.classList.add(this.textCssClass);
			document.body.appendChild(p);
		};

		document.body.appendChild(button);
	}
}

export default HelloButton;
