const posts = require("./db/posts.json");

function createSlug(title, posts)
{
	if (!title || typeof title !== "string")
	{
		throw new Error("Title is not present or is not a string");
	}

	if (!Array.isArray(posts))
	{
		throw new Error("Posts array must be present");
	}

	// all characters to lowercase
	let slug = title.toLowerCase();

	// trim string and replace spaces with dashes
	slug = slug.trim().replaceAll(" ", "-");

	// check if slug already exists and add a number at the end
	let counter = 1;
	let originalSlug = slug;

	while (posts.findIndex(post => post.slug === slug) !== -1)
	{
		slug = `${originalSlug}-${counter}`;
		counter++;
	}


	console.log(slug);
	return slug;
}

module.exports = createSlug;
