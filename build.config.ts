import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	clean: true,
	rollup: {
		inlineDependencies: true,
		esbuild: {
			minify: true
		}
	}
});

