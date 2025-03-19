document.getElementById("openBtn").addEventListener("click", function () {
    document.querySelector(".envelope").classList.add("open");
    setTimeout(() => {
        document.getElementById("popup").classList.add("active");
    }, 500);
});

document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("popup").classList.remove("active");
    setTimeout(() => {
        document.querySelector(".envelope").classList.remove("open");
    }, 500);
});
