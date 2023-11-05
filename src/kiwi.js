import Heading from "./components/heading/heading.js";
import KiwiImage from "./components/kiwi-image/kiwi-image.js";
import _ from "lodash";
import React from "react";
const heading = new Heading(_.upperFirst("kiwi"));
heading.render(document.body);

const kiwiImg = new KiwiImage();
kiwiImg.render(document.body);
