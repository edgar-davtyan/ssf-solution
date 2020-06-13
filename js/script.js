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
check.addEventListener("click", function (ev) {
    ev.stopPropagation()
    if (check.checked) {
        document.querySelector(".hamburger").addEventListener("click", function (ev) {
                ev.stopPropagation()
            }
        )
    }
    menu.classList.add("closed");
    menu.addEventListener("click", function (ev) {
        ev.stopPropagation()
    })
    document.body.onclick = function () {
        menu.classList.remove("closed");
        check.checked = false;
    }
});

$(".a").click(function () {
    let id = $(this).attr("href");
    let scrollElem = $(id);
    let offsetTop = $(scrollElem).offset().top;
    $("html, body").animate({
        scrollTop: offsetTop
    }, 1000)
})
