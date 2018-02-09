var friendData = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friendData);
	});

	app.post("/api/friends", function(req, res) {
		friendData.push(req.body);
		res.json(true);

		var bestMatch = {
			name: "",
			friendDifference: 1000
		};

		var userData = req.body;
		var userScores = userData.scores;

		console.log(userScores);
	})

}