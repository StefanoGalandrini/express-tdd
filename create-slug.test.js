const { test, expect } = require("@jest/globals");
const createSlug = require("./create-slug");
const posts = require("./db/posts.json");

// string to be tested
const testString = posts[0].titolo;


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

	expect(result).toBe("viaggio-nell'infinito-e-oltre-2");
});

test("dovrebbe sostituire gli spazi con i trattini", () =>
{
	const test = testString;
	const result = createSlug(test, posts);

	expect(result).toBe("viaggio-nell'infinito-e-oltre-2");
});

test("dovrebbe incrementare di 1 lo slug quando esiste già", () =>
{
	const test = testString;
	const result = createSlug(test, posts);

	expect(result).toBe("viaggio-nell'infinito-e-oltre-2");
});

test("dovrebbe lanciare un errore in caso di titolo non presente o formato errato", () =>
{
	const test = null;
	const result = () => createSlug(test, posts);

	expect(result).toThrowError("Title is not present or is not a string");
});

test("dovrebbe lanciare un errore se manca l'array dei post", () =>
{
	const test = testString;
	const posts = null;
	const result = () => createSlug(test, posts);

	expect(result).toThrowError("Posts array must be present");
});


