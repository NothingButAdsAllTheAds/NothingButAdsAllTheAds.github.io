function check_ads() {
	var k = document.getElementById("ads_are_permitted_here");
	try {
		(_defineProperty).toString();
		k.innerHTML = "T";
	} catch (err) {
		k.innerHTML = "F";
	}
}

function adblockIsActive() {
	var m;
	while (true) {
		m = document.getElementById("ads_are_permitted_here").innerHTML;
		if (m !== "") {
			if (m === "T") {
				return false;
			}
			return true;
		}
		check_ads();
	}
}
