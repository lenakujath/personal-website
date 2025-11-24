export default function (eleventyConfig) {
	// Output directory: _site
	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("bundle.css");

	eleventyConfig.addPassthroughCopy("fonts");

	eleventyConfig.addPassthroughCopy("src");

	eleventyConfig.addPassthroughCopy("images");

};
