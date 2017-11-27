function closeNewsletter() {
	document.getElementById('popupEmail').style.display = 'none';
}

function showNewsletter() {
	var newsletter = document.getElementById('popupEmail');
	newsletter.style.display = 'flex';
	document.getElementById('closeEmail').addEventListener('mousedown', closeNewsletter);
}

function onload() {
	window.setTimeout(showNewsletter, 1000);
}

window.addEventListener('DOMContentLoaded', onload);
