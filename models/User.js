const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		reuired: [ true, "FirstName is Required!"]
	},
	lastName: {
		type: String,
		reuired: [ true, "LastName is Required!"]
	},
	email: {
		type: String,
		reuired: [ true, "Email is Required!"]
	},
	password: {
		type: String,
		reuired: [ true, "Password is Required!"]
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	mobileNo: {
		type: String,
		required: [true, "Mobile Number is Required!"]
	},
	enrollments: [{
		courseId: {
			type: String,
			reuired: [true, "CourseId is required!"]
		},
		enrolledOn: {
			type: Date,
			default: new Date()
		},
		status: {
			type: String,
			default: "Enrolled"
		}
	}]



})

module.exports = mongoose.model("User", userSchema);