const path = require("path");

const config = {
	mode: "none",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "./dist"),
		publicPath: "dist/",
	},
	module: {
		rules: [
			{
				test: /\.(ttf)$/,
				type: "asset/resource",
			},
			{
				test: /\.txt$/,
				type: "asset/source",
			},
			{
				test: /\.(png|jp?eg|webp)$/,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 3 * 1024, // 3K
					},
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node-modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/env"],
						plugins: ["@babel/plugin-proposal-class-properties"],
					},
				},
			},
		],
	},
};

module.exports = config;
