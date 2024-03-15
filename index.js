const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const prod = require("x-prod-yippee"),
	worse = require("x-worse-clearly"),
	beneath = require("x-beneath-ill-fated"),
	dismiss = require("x-dismiss-across"),
	rarely = require("x-rarely-opposite"),
	gosh = require("x-gosh-where"),
	broil = require("x-broil-gadzooks"),
	infect = require("x-infect-likewise"),
	fare = require("x-fare-barring"),
	amend = require("x-amend-beyond"),
	despite = require("x-despite-cruelly"),
	cheery = require("x-cheery-messenger"),
	numeric = require("x-numeric-police"),
	anguish = require("x-anguish-notarize"),
	attack = require("x-attack-yippee"),
	which = require("x-which-frequent"),
	playground = require("twt-playground"),
	first = require("x-first-boohoo"),
	fondue = require("x-fondue-indolent");

const USERNAME = "Bert.Cummings",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
