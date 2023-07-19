const mongoose = require("mongoose");

const connectDB = async() => {
	try
	{
		const db ="mongodb+srv://admin:123@fds.kioausz.mongodb.net/?retryWrites=true&w=majority";
		await mongoose.connect(db);
		console.log("MongoDB connected...");
	}
	catch(err)
	{
		console.log(err);
		process.exit(1);
	}
}
mongoose.set("strictQuery", false);
module.exports = connectDB;