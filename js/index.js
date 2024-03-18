document.getElementById("srh").addEventListener("focusin", function (e) {
    this.parentElement.parentElement.style.backgroundColor = "white";
    this.style.backgroundColor = "white";
    this.parentElement.parentElement.style.boxShadow = "1px 1px 2px grey,-1px -1px 2px grey";
    console.log(this.parentElement.parentElement)
});
document.getElementById("srh").addEventListener("focusout", function (e) {
    this.parentElement.parentElement.style.backgroundColor = "var(--buton)";
    this.style.backgroundColor = "var(--buton)";
    this.parentElement.parentElement.style.boxShadow = "1px 1px 2px white,-1px -1px 2px white";
    console.log(this.parentElement.parentElement)
});

var el = document.getElementById("tos");
el.setAttribute("id", "non");

var ml = 0;
document.getElementById("options").children[5].addEventListener("click", function () {
    if (ml == 0) {

        this.children[0].setAttribute("class", "cin5");

        this.children[1].innerHTML = "<div>less</div>";
        console.log(el);
        el.setAttribute("id", "rel");
        console.log(el);
        ml = 1;
    }
    else {
        this.children[0].setAttribute("class", "cin3");

        this.children[1].innerHTML = "<div>More</div>";
        el.setAttribute("id", "non");
        ml = 0;


    }

});

let el1 = document.getElementsByClassName("cat1")[0];
el1.style.borderBottom = " 4px solid blue";


function createNewMail(data) {

    let add = document.createElement("div");
    add.setAttribute("class", "mal1");

    let star = document.createElement("div");
    star.setAttribute("class", "starr");
    star.innerHTML = `<i class="fa-regular fa-star"></i>`;


    add.appendChild(star);

    let frm = document.createElement("div");
    frm.setAttribute("class", "from");
    frm.innerText = data.name;

    add.appendChild(frm);



    let sub = document.createElement("div");
    sub.innerHTML = data.subject;

    add.appendChild(sub);


    let date = document.createElement("div");
    date.innerHTML = data.date;
    date.setAttribute("class", "date");
    add.appendChild(date);



    let opt = document.createElement("div");
    opt.setAttribute("class", "onopt");
    opt.innerHTML = `
<div><i class="fa-solid fa-box-archive"></i></div>
<div><i class="fa-solid fa-trash-can"></i></div>
<div><i class="fa-regular fa-envelope"></i></div>
<div><i class="fa-regular fa-clock"></i></div>
`;
    add.appendChild(opt);
    return add;
}


let person = {
    name: "Instagram and Google are trying",
    subject: "New developer hired by the google",
    date: "June 17"
};

for (let i = 0; i < 2; i++) {
    let n1 = createNewMail(person);
    let mail = document.getElementById("maills");
    mail.appendChild(n1);
}

function tooltip(ele,str){
    let ell=document.createElement("div");
    ell.setAttribute("class","tip");
    ell.innerHTML=str;
    ele.appendChild(ell);
}


let ti=document.getElementsByClassName("starr");
for(let i=0;i<ti.length;i++){

    tooltip(ti[i],"Starred");
}



