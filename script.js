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
    boxitem.id="box" + (index + 1);
    container.append(boxitem);
    var link = document.createElement('a');
    link.href = item.link;
    boxitem.append(link);
    var boxphoto = document.createElement('div');
    boxphoto.className="box-photo";
    link.append(boxphoto);
    var img = document.createElement('img');
    img.src=item.src;
    img.style.width="100%";
    img.style.height="100%";
    img.alt=item.name;
    boxphoto.append(img);

    var boxcontent = document.createElement('div');
    boxcontent.className="box-content";
    boxitem.append(boxcontent);
    var title = document.createElement('p');
    title.innerHTML= item.name + " - " + item.date;
    boxcontent.append(title);
    var desc = document.createElement('p');
    desc.innerHTML = item.description;
    boxcontent.append(desc);
}
function savetoStorage() {
    localStorage.setItem("projects", JSON.stringify(list));
}

// var n = document.getElementById("new");
// n.addEventListener("click", newWorks);

// function newWorks() {
//     document.getElementById("box1").style.order = "9";
//     document.getElementById("box2").style.order = "8";
//     document.getElementById("box3").style.order = "7";
//     document.getElementById("box4").style.order = "6";
//     document.getElementById("box5").style.order = "5";
//     document.getElementById("box6").style.order = "4";
//     document.getElementById("box7").style.order = "3";
//     document.getElementById("box8").style.order = "2";
//     document.getElementById("box9").style.order = "1";
// }

// var o = document.getElementById("old");
// o.addEventListener("click", oldWorks);

// function oldWorks() {
//     document.getElementById("box1").style.order = "1";
//     document.getElementById("box2").style.order = "2";
//     document.getElementById("box3").style.order = "3";
//     document.getElementById("box4").style.order = "4";
//     document.getElementById("box5").style.order = "5";
//     document.getElementById("box6").style.order = "6";
//     document.getElementById("box7").style.order = "7";
//     document.getElementById("box8").style.order = "8";
//     document.getElementById("box9").style.order = "9";
// }


