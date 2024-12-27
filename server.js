const { config } = require("dotenv");
const { connect } = require("mongoose");
const app = require("./app.js");
config();

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		await connect(process.env.MONGODB_URI);
		app.listen(port, () =>{
			console.log(`Server listening on port ${port}`)
		})
	} catch (err) {
		console.log(err);
	}
};

start();
