var count_class = document.querySelector(".count_up")
var start = document.querySelector(".start")
start.addEventListener("click", () => {
    console.log("button clickerd :)");
    for (let i = 0; i < 100000; i++) {
        setTimeout(function() {
            count_class.innerHTML = i;
        }, 1 * i);
    }
});