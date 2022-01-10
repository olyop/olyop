import path from "path"
import { Configuration } from "webpack"
import DotenvPlugin from "dotenv-webpack"
import HTMLWebpackPlugin from "html-webpack-plugin"
import MiniCSSExtractPlugin from "mini-css-extract-plugin"
import CSSMinimizerPlugin from "css-minimizer-webpack-plugin"

const IS_DEV =
	process.env.NODE_ENV === "development"

const ROOT_PATH = __dirname
const SRC_PATH = path.join(ROOT_PATH, "src")
const SRC_PUBLIC_PATH = path.join(SRC_PATH, "public")
const SRC_ROOT_PATH = path.join(SRC_PATH, "index.tsx")
const SRC_ENTRY_PATH = path.join(SRC_PATH, "index.html")

const BUILD_PATH = path.join(ROOT_PATH, "build")

const config: Configuration = {
	entry: SRC_ROOT_PATH,
	mode: process.env.NODE_ENV,
	devtool: IS_DEV ? "inline-source-map" : false,
	output: {
		publicPath: "/",
		path: BUILD_PATH,
		filename: "[fullhash].js",
	},
	ignoreWarnings: [
		/Failed to parse source map/,
	],
	devServer: {
		hot: true,
		host: process.env.HOST,
		port: process.env.PORT,
		historyApiFallback: true,
		client: { logging: "error" },
		static: { directory: SRC_PUBLIC_PATH },
	},
	resolve: {
		symlinks: false,
		extensions: [".js", ".ts", ".tsx"],
	},
	module: {
		rules: [{
			test: /\.js$/,
			enforce: "pre",
			loader: "source-map-loader",
		},{
			test: /\.gql$/,
			exclude: /node_modules/,
			loader: "graphql-tag/loader",
		},{
			test: /\.tsx?$/,
			loader: "ts-loader",
			exclude: /node_modules/,
			options: {
				onlyCompileBundledFiles: true,
			},
		},{
			test: /\.css$/,
			use: [
				IS_DEV ?
					"style-loader" :
					MiniCSSExtractPlugin.loader,
				"css-loader",
			],
		},{
			test: /\.scss$/,
			use: [
				IS_DEV ?
					"style-loader" :
					MiniCSSExtractPlugin.loader,
				"css-loader",
				"sass-loader",
			],
		}],
	},
	plugins: [
		new DotenvPlugin(),
		new HTMLWebpackPlugin({
			minify: false,
			title: "olyop",
			filename: "index.html",
			template: SRC_ENTRY_PATH,
		}),
		...(IS_DEV ? [] : [
			new CSSMinimizerPlugin(),
			new MiniCSSExtractPlugin({
				filename: "[fullhash].css",
			}),
		]),
	],
}

export default config