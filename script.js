const filee = document.querySelector(".filee");
const navList = document.querySelector(".menu-overlay");

filee.addEventListener("click", function() {
	navList.classList.toggle("active");
	hamb.classList.toggle("click");
})