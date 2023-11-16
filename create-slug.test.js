const { test, expect } = require("@jest/globals");
const createSlug = require("./create-slug");
const posts = require("./db/posts.json");

// string to be tested
const testString = "Quali test devo fare?...";


// test("dovrebbe ritornare una stringa", () =>
// {
// 	const test = testString;
// 	const result = () => createSlug(test);

// 	expect(result).toThrowError("Input must be a string");
// });

test("dovrebbe ritornare una stringa", () =>
{
	const test = testString;
	const result = createSlug(test, posts);

	expect(typeof result).toBe("string");
});

test("dovrebbe ritornare una stringa in lowercase", () =>
{
	const test = testString;
	const result = createSlug(test, posts);

	expect(result).toBe("quali-test-devo-fare?...");
});

test("dovrebbe sostituire gli spazi con i trattini", () =>
{
	const test = testString;
	const result = createSlug(test, posts);

	expect(result).toBe("quali-test-devo-fare?...");
});
