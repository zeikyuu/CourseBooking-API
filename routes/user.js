const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const userController = require("../controllers/userController.js");
const auth = require("../auth.js")

//routes folder - is where all http method and endpoints are located

router.post("/checkEmail", (req, res) => {
	userController.checkEmailExists(req.body).then(resultFromController => res.send(resultFromController));
})

router.post("/register", (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController));
})

router.post("/login", (req, res) => {
	userController.loginUser(req.body).then(resultFromController => res.send(resultFromController));
})

//S38 Actvity - Code Along
router.post("/details", auth.verify, (req, res) => {
	// We can get the token by accessing req.headers.authorization
	const userData = auth.decode(req.headers.authorization)

	userController.getProfile({userId : userData.id}).then(resultFromController => res.send(resultFromController));
})

//S41 D1 ROUTER - CODE ALONG ACTIVITY
router.post("/enroll", auth.verify, (req, res) => {
	let data = {
		userId : auth.decode(req.headers.authorization).id,
		courseId : req.body.courseId
	}

	userController.enroll(data).then(resultFromController => res.send(resultFromController));
})

module.exports = router;