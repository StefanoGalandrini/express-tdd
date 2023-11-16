const posts = require("./db/posts.json");

function createSlug(title, posts)
{
	if (typeof title !== "string")
	{
		throw new Error("Input must be a string");
	}

	// all characters to lowercase
	title = title.toLowerCase();

	// trim string and replace spaces with dashes
	title = title.trim().replaceAll(" ", "-");

	console.log(title);
	return title;
};

module.exports = createSlug;
