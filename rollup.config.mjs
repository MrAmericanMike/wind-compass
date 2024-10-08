import typescript from "@rollup/plugin-typescript";
import deletePlugin from "rollup-plugin-delete";

export default {
	input: "src/main.ts",
	plugins: [deletePlugin({ targets: "dist/*" }), typescript()],
	output: [
		{
			file: "dist/main.cjs",
			format: "cjs",
			exports: "auto"
		},
		{
			file: "dist/main.esm.js",
			format: "es"
		},
		{
			file: "dist/main.umd.js",
			format: "umd",
			name: "WindCompass",
			exports: "auto"
		}
	]
};
