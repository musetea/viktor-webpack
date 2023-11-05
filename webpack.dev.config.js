const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 개발 모드 감지
//const isDevMode = process.env.NODE_ENV.includes("dev");

const config = {
	mode: "development",
	devServer: {
		port: 9000,
		static: {
			directory: path.resolve(__dirname, "./dist"),
		},
		devMiddleware: {
			index: "index.html",
			writeToDisk: true,
		},
	},
	entry: {
		hello: "./src/index.js",
		kiwi: "./src/kiwi.js",
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "./dist"),
		publicPath: "",
		// clean: {
		// 	dry: true,
		// 	keep: /\.css/,
		// },
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
				//use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
				//use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
	plugins: [
		new TerserPlugin({}),
		// new MiniCssExtractPlugin({
		// 	filename: "style.css",
		// }),
		//
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [
				"**/*",
				path.join(process.cwd(), "build/**/*"),
			],
		}),

		//
		new HtmlWebpackPlugin({
			filename: "hello.html",
			chunks: ["hello"],
			title: "Hello World Page",
			template: "./src/index.ejs",
			templateParameters: {
				title: "Hello Hi there",
			},
		}),

		new HtmlWebpackPlugin({
			filename: "kiwi.html",
			chunks: ["kiwi"],
			title: "Kiwi Page",
			template: "./src/index.ejs",
			templateParameters: {
				title: "Kiwi Image",
			},
		}),
	],
};

module.exports = config;
