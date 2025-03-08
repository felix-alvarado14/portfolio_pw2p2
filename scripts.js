document.addEventListener("DOMContentLoaded", function () {
    const aboutMeBtn = document.getElementById("about-me-btn");
    const aboutMeBox = document.getElementById("about-me-box");

    aboutMeBtn.addEventListener("click", function () {
        if (aboutMeBox.style.display === "none") {
            aboutMeBox.style.display = "block";
        } else {
            aboutMeBox.style.display = "none";
        }
    });
});