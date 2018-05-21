var a = document.querySelector(".a");
var tbl = document.getElementById("tbl");
a.addEventListener('click', changeColor);

function changeColor(e) {
	a.style.background = "red";
}

var b = document.querySelector(".b");
b.addEventListener('click', showDate);

function showDate(e) {
	var today = new Date()
	var h = today.getHours()
	var m = today.getMinutes()
	var s = today.getSeconds()
	b.innerHTML = h + ":" + m + ":" + s;
}

var c = document.querySelector(".c");
c.addEventListener('click', appendRow);

var flag = 0;
var tr = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var text=document.createTextNode("New line");
td1.appendChild(text);
tr.appendChild(td1);
tr.appendChild(td2);

function appendRow(e) {
	tbl.appendChild(tr);
	flag = 1;
}

var d = document.querySelector(".d");
d.addEventListener('click', removeRow);

function removeRow(e) {
	if (flag) {
		tbl.removeChild(tr);
		flag = 0;
	}
}

var e = document.querySelector(".e");
e.addEventListener('click', showCoordinate);

function showCoordinate(event) {
	var x = event.clientX;
	var y = event.clientY;
	var coordinate = "X: " + x + ", Y: " + y;
	e.innerHTML = coordinate;
}

var f = document.querySelector(".f");
f.addEventListener('click', openWindow);

function openWindow() {
	window.open("https://www.baidu.com/");
}