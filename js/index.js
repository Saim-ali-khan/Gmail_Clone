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

var el=document.getElementById("tos");
el.setAttribute("id","non");

var ml = 0;
document.getElementById("options").children[5].addEventListener("click", function () {
    if (ml == 0) {

        this.children[0].setAttribute("class", "cin5");

        this.children[1].innerHTML = "<div>less</div>";
        console.log(el);
        el.setAttribute("id","rel");
        console.log(el);
        ml = 1;
    }
    else {
        this.children[0].setAttribute("class", "cin3");

        this.children[1].innerHTML = "<div>More</div>";
        el.setAttribute("id","non");
        ml= 0;


    }

});