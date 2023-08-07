let hamburge = document.getElementsByClassName("hamburger");
let drop_down = document.getElementById("unique");
let cross = document.getElementsByClassName("cross");

hamburge[0].addEventListener("click", function () {
  cross[0].style.display = "block";
  hamburge[0].style.display = "none";
  drop_down.style.display = "flex";
});
cross[0].addEventListener("click", function () {
  hamburge[0].style.display = "block";
  cross[0].style.display = "none";
  drop_down.style.display = "none";
});
