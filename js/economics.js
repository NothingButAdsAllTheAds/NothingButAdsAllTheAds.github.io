function allTheMoney() {
	var body = document.body;
	var html = document.documentElement;
	var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	var docWidth = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
	var p = document.createElement("p");
	var curr = ["$", "£", "€", "¥", "₩", "¢"];
	var t = document.createTextNode(curr[Math.floor(Math.random() * curr.length)]);
	p.appendChild(t);
	var body = document.getElementsByTagName("body")[0];
	body.insertBefore(p, body.firstChild);
	p.classList.add('allTheMoney');
	p.style.left = (Math.random() * parseInt(docWidth)).toString() + "px";
	p.style.top = (Math.random() * parseInt(docHeight)).toString() + "px";
	window.setTimeout(allTheMoney, 5);
}
