let li = document.querySelectorAll(".a");
let check = document.querySelector(".check");
let menu = document.querySelector(".menu");
let closed = document.querySelector(".closed");
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function f1() {
        menu.classList.remove("closed");
        check.checked = false;
    })
}
check.addEventListener("click", function f(ev) {
    ev.stopPropagation()
    menu.classList.add("closed");
    document.body.onclick = function () {
        menu.classList.remove("closed");
        check.checked = false;
        menu.addEventListener("click", function (ev) {
            ev.stopPropagation()
        })
    }
});