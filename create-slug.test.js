const { test, expect } = require('@jest/globals');
const createSlug = require('./create-slug');

test('dovrebbe ritornare una stringa', () =>
{
	expect(typeof createSlug('Test Title', [])).toBe('string');
});


