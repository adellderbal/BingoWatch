var pics = [
  "./randomMovies/Joker1.jpg",
  "./randomMovies/j1.jpg",
  "./randomMovies/j2.jpg",
  "./randomMovies/rambo.jpg",
  "./randomMovies/IT_Chapter.jpg"
];

var btn = document.querySelector("#gen");
var img = document.querySelector("#imageMovies");
var counter = 1;
btn.addEventListener("click", function() {
  if (counter == 5) {
    counter = 0;
  }
  img.style.display = "block";
  img.src = pics[Math.floor(Math.random() * pics.length)];
  counter++;
});
