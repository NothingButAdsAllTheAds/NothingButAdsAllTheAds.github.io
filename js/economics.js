function all_the_money() {
	var p = document.createElement("p");
	var curr = ["$", "£", "€", "¥", "₩"];
	var t = document.createTextNode(curr[Math.floor(Math.random() * curr.length)]);
	p.appendChild(t);
	document.getElementsByTagName("body")[0].appendChild(p);
	p.classList.add('allTheMoney');
	p.style.position = "fixed";
	p.style.left = (Math.random() * parseInt(window.innerWidth)).toString() + "px";
	p.style.top = (Math.random() * parseInt(window.innerHeight)).toString() + "px";
	window.setTimeout(all_the_money, 5);
}
