var firstNames = ["Emma", "Liam", "Olivia", "Noah", "Ava", "Logan", "Isabella", "Lucas", "Sophia", "Mason", "Mia", "Oliver", "Amelia", "Ethan", "Charlotte", "Elijah", "Harper", "Aiden", "Aria", "James", "Ella", "Benjamin", "Evelyn", "Sebastian", "Abigail", "Jackson", "Emily", "Alexander", "Avery", "Jacob", "Scarlett", "Carter", "Madison", "Jayden", "Sofia", "Michael", "Chloe", "Daniel", "Lily", "Luke", "Mila", "William", "Layla", "Matthew", "Riley", "Wyatt", "Ellie", "Grayson", "Luna", "Jack", "Zoey", "Gabriel", "Elizabeth", "Henry", "Grace", "Julian", "Victoria", "Levi", "Penelope", "Owen", "Aubrey", "Leo", "Hannah", "Ryan", "Nora", "Jaxon", "Camila", "Lincoln", "Addison", "Isaiah", "Stella", "Nathan", "Bella", "Samuel", "Natalie", "David", "Maya", "Adam", "Skylar", "Joseph", "Savannah", "Eli", "Aurora", "Isaac", "Lillian", "John", "Paisley", "Muhammad", "Brooklyn", "Anthony", "Hazel", "Caleb", "Audrey", "Dylan", "Lucy", "Josiah", "Aaliyah", "Hunter", "Zoe", "Joshua"];
var lastNames = ["Smith", "Jones", "Brown", "Johnson", "Williams", "Miller", "Taylor", "Wilson", "Davis", "White", "Clark", "Hall", "Thomas", "Thompson", "Moore", "Hill", "Walker", "Anderson", "Wright", "Martin", "Wood", "Allen", "Robinson", "Lewis", "Scott", "Young", "Jackson", "Adams", "Tryniski", "Green", "Evans", "King", "Baker", "John", "Harris", "Roberts", "Campbell", "James", "Stewart", "Lee", "County"];
var emailExtentions = ["@gmail.com", "@outlook.com", "@yahoo.com", "@hotmail.com"];
var passwords = ["123456", "password", "12345678", "qwerty", "123456789", "12345", "1234", "111111", "1234567", "dragon", "123123", "baseball", "abc123", "football", "monkey", "letmein", "696969", "shadow", "master", "666666", "qwertyuiop", "123321", "mustang", "1234567890", "michael", "654321", "pussy", "superman", "1qaz2wsx", "7777777"];

function forgotEmail() {
	var firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
	var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
	var extension = emailExtentions[Math.floor(Math.random() * emailExtentions.length)];
	document.getElementById('newsletterEmail').value = firstName + lastName + extension;
}

function forgotPassword() {
	var newPassword = passwords[Math.floor(Math.random() * passwords.length)];
	document.getElementById('newsletterPassword').value = newPassword;
}

function padZeros(num, size) {
	var s = num + "";
	while (s.length < size) s = "0" + s;
	return s;
}

function forgotSocialSecurity() {
	var part1 = padZeros(Math.floor(Math.random() * 999), 3);
	var part2 = padZeros(Math.floor(Math.random() * 99), 2);
	var part3 = padZeros(Math.floor(Math.random() * 9999), 4);
	document.getElementById('newsletterSocialSecurity').value = part1 + '-' + part2 + '-' + part3;
}

function closeNewsletter() {
	document.getElementById('popupEmail').style.display = 'none';
}

function showNewsletter() {
	var newsletter = document.getElementById('popupEmail');
	newsletter.style.display = 'flex';
	document.getElementById('closeEmail').addEventListener('mousedown', closeNewsletter);
	document.getElementById('forgotEmail').addEventListener('mousedown', forgotEmail);
	document.getElementById('forgotPassword').addEventListener('mousedown', forgotPassword);
	document.getElementById('forgotSocialSecurity').addEventListener('mousedown', forgotSocialSecurity);
}

function onload() {
	window.setTimeout(showNewsletter, 1000);
}

window.addEventListener('DOMContentLoaded', onload);
