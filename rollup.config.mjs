import typescript from "@rollup/plugin-typescript";
import deletePlugin from "rollup-plugin-delete";

export default {
	input: "src/main.ts",
	plugins: [deletePlugin({ targets: "dist/*" }), typescript({ tsconfig: "./tsconfig.json" })],
	output: [
		{
			file: "dist/main.cjs",
			format: "cjs",
			exports: "auto",
			sourcemap: true
		},
		{
			file: "dist/main.mjs",
			format: "es",
			sourcemap: true
		},
		{
			file: "dist/main.umd.js",
			format: "umd",
			name: "WindCompass",
			exports: "auto",
			sourcemap: true
		}
	]
};
