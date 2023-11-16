const { test, expect } = require("@jest/globals");
const createSlug = require("./create-slug");

test("dovrebbe ritornare una stringa", () =>
{
	const testString = "Quali test devo eseguire?...";
	const result = createSlug(testString);
	console.log(typeof testString);
	expect(typeof result).toBe("string");
});

test("dovrebbe ritornare una stringa in lowercase", () =>
{
	const testString = "Quali test devo eseguire?...";
	const result = createSlug(testString);

	expect(result).toBe(testString.toLowerCase());
});

test("dovrebbe sostituire gli spazi con i trattini", () =>
{
	const testString = "Quali test devo eseguire?...";
	const result = createSlug(testString);

	expect(result).toBe("quali-test-devo-eseguire");
});
