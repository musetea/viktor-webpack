import helloWorld from "./hello-world.js";
import addImage from "./add-image.js";
import HelloButton from "./components/hello/hello.js";
import Heading from "./components/heading/heading.js";
import _ from "lodash";
import React from "react";

helloWorld();

document.addEventListener("DOMContentLoaded", ev => {
	console.log(ev);
	addImage();

	const heading = new Heading(_.upperFirst("hello world"));
	heading.render(document.body);

	const button = new HelloButton();
	button.render();
});
