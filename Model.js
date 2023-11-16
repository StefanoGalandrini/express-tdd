const fs = require("fs");
const path = require("path");

class Model
{
	constructor(filename)
	{
		this.filename = path.join(__dirname, filename);

		// if file doesn't exist, create it
		if (!fs.existsSync(this.filename))
		{
			fs.writeFileSync(this.filename, "[]");
		}
	}

	read()
	{
		const data = fs.readFileSync(this.filename, "utf-8");
		return JSON.parse(data);
	}

	add(newItem)
	{
		const data = this.read();
		data.push(newItem);
		fs.writeFileSync(this.filename, JSON.stringify(data, null, 2));
		return data;
	}
}

module.exports = Model;
