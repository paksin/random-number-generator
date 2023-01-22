var generateBtn = document.querySelector("#generate");
var htmlInsert = "";

function generator() {
  document
    .querySelector("#prevresult")
    .insertAdjacentHTML("afterbegin", htmlInsert);
  document.querySelector(".inputbox").style.display = "none";
  var userInput = document.getElementById("upperlim").value;
  var randNum = Math.floor(Math.random() * userInput) + 1;
  htmlInsert = "<h2>" + randNum + "</h2>";
  document.querySelector("#result").innerHTML = "<h1>" + randNum + "</h1>";
}

generateBtn.addEventListener("click", generator);
