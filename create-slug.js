module.exports = function createSlug(str)
{
	if (typeof str !== 'string')
	{
		throw new TypeError('String required');
	}

	str = str.toLowerCase();

	console.log(str);
	return str;
};
