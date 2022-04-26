let container = document.querySelector(".container");
const url = "projects.json";
let list = [];
let localData = localStorage.getItem('projects');
// console.log(localData);

list = JSON.parse(localStorage.getItem('projects'));

jsloader();

function jsloader() {
    fetch(url)
        .then((rep) => rep.json())
        .then((data) => {
            list = data;
            localStorage.setItem("projects", JSON.stringify(list));
            maker();
            savetoStorage();
        })
}

function maker() {
    container.innerHTML = " ";
    list.forEach((el, index) => {
        makeDivs(el, index);
    });
}
function makeDivs(item, index) {
    var boxitem = document.createElement('div');
    boxitem.className = "box-item";
    boxitem.id = "box" + (index + 1);
    container.append(boxitem);
    var link = document.createElement('a');
    link.href = item.link;
    boxitem.append(link);
    var boxphoto = document.createElement('div');
    boxphoto.className = "box-photo";
    link.append(boxphoto);
    var img = document.createElement('img');
    img.src = item.src;
    img.style.width = "100%";
    img.style.height = "100%";
    img.alt = item.name;
    boxphoto.append(img);

    var boxcontent = document.createElement('div');
    boxcontent.className = "box-content";
    boxitem.append(boxcontent);
    var title = document.createElement('p');
    title.innerHTML = item.name + " - " + item.date;
    boxcontent.append(title);
    var desc = document.createElement('p');
    desc.innerHTML = item.description;
    boxcontent.append(desc);
}
function savetoStorage() {
    localStorage.setItem("projects", JSON.stringify(list));
}

// button functions
setTimeout(function () {
    var o = document.getElementById("old");
    o.addEventListener("click", oldWorks);
}, 100)

function oldWorks() {
    const boxs = document.querySelectorAll('.box-item');

    boxs.forEach((el, index) => {
        var box = "box" + (index + 1);
        var order = index + 1;
        document.getElementById(box).style.order = order;
    });
}

var div = [];
var orders = [];

setTimeout(function () {
    var n = document.getElementById("new");
    n.addEventListener("click", newWorks);
}, 100)

function newWorks() {
    const boxs = document.querySelectorAll('.box-item');

    boxs.forEach((el, index) => {
        var box = "box" + (index + 1);
        div.push(box);
    });

    for (var i = boxs.length; i > 0; i--) { 
        var order = i;
        orders.push(order);
    }

    boxs.forEach((el, index) => {
        document.getElementById(div[index]).style.order = orders[index];
    });
}


