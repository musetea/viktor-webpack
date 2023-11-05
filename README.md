# 웹팩 5

```sh
    npm i -D webpack webpack-cli
    npm i -D style-loader
    npm i -D css-loader
    npm i -D sass
    npm i -D sass-loader
    npm i -D @babel/core
    npm i -D babel-loader
    npm i -D @babel/preset-env
    npm i  -D @babel/plugin-proposal-class-properties

    # plugin
    # version 5 내장 플러그인
    npm install terser-webpack-plugin --save-

    # dev server
    npm install --save-dev webpack-dev-server



```

```
    npx webpack --stats detailed
```

- asset/resource : 파일을 폴더에 저장함.
- asset/inline : 파일을 변환파일에 포함함.
- asset
- asset/source :

###

#### HtmlWebpackPlugin

-

```sh
    npm install --save-dev html-webpack-plugin
```

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
```

#### MiniCssExtractPlugin

- CSS 파일을 별도 파일로 추출(extract)

```
    npm i mini-css-extract-plugin -D
```

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
new MiniCssExtractPlugin({
	linkType: false,
	filename: "[name].[contenthash].css",
	chunkFilename: "[id].[contenthash].css",
});
```

#### webpack-plugin

```js
// 번들 사이즈 줄임
const TerserPlugin = require("terser-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
new TerserPlugin({
	terserOptions: {
		compress: {},
	},
});
```
