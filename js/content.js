function generate_content() {
	var wCount = Math.floor((window.innerWidth) / 180);
	var hCount = Math.floor((window.innerHeight * 2) / 150);
	var b = document.getElementsByTagName("body")[0];
	for (let y = 0; y < hCount; y++) {
		for (let x = 0; x < wCount; x++) {
			var q = document.createElement("span");
			q.innerHTML = "<iframe src=\"//rcm-na.amazon-adsystem.com/e/cm?o=1&p=9&l=ez&f=ifr&linkID=7eb1b96497a564498a8a4b1cf96736d6&t=inthelink-20&tracking_id=inthelink-20\" width=\"180\" height=\"150\" scrolling=\"no\" border=\"0\" marginwidth=\"0\" style=\"border:none;\" frameborder=\"0\"></iframe>";
			b.appendChild(q);
		}
	}
}

function generateMoreContent() {
	generate_content();
}

window.onscroll = function (ev) {
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { //scrolled to the bottom
		generateMoreContent();
	}
};
