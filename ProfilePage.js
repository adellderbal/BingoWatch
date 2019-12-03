var securitybtn = document.querySelector("#security");
var questions = document.querySelector("#secure");

securitybtn.addEventListener("click", function() {
  if (questions.style.display == "block") {
    securitybtn.textContent = "See security questions";
    questions.style.display = "none";
  } else {
    securitybtn.textContent = "Hide security questions";
    questions.style.display = "block";
  }
});
