var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

	// Create the gradient string: "linear-gradient(to right, c1, c2)" 
function genGradient() {
	bg = body.style.background;
	bg = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.innerHTML = bg;
}

color1.addEventListener("input", genGradient);

color2.addEventListener("input", genGradient);

console.log(typeof(color1));
