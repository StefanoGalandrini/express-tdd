module.exports = function createSlug(str)
{
	if (typeof str !== 'string')
	{
		throw new TypeError('String required');
	}

	return str;
};
