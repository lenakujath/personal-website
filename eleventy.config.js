export default function (eleventyConfig) {
	// Output directory: _site
	eleventyConfig.addPassthroughCopy("bundle.css");

	// Copy `/fonts/` to `_site/css/fonts/`
	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("fonts");

};
