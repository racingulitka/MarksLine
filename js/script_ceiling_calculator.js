//ad variables
let total, square, maxWidth, corners, pipes, spotLights, bigLight, cornice, ceramicTiles, timber, corniceNiche, colorRoof, credit;

console.log("hello1");

window.onload = () =>{
		document.getElementById("arrowContainer").addEventListener("click", () => {
			window.scrollTo(0, 0);
			document.getElementById("arrowContainer").style.cssText = "animation: anim1 1.2s ease-out; opacity:0;";
			setTimeout(() => {
				document.getElementById("arrowContainer").style.cssText = "animation: toTheUp 1.2s ease-in-out infinite; opacity:0;";
			}, 1200);
		});
squareCostFunction();
cornersCostFunction();
pipesCostFunction();
spotLightsCostFunction();
bigLightCostFunction();
corniceCostFunction();
ceramicTilesCostFunction();
timberCostFunction();
corniceNicheCostFunction();
creditCostFunction();
totalFunction();
};

//calculate values in rightContainers

function squareCostFunction(){
	console.log(document.getElementById("square").value);
	if (document.getElementById("square").value <=2){
		document.getElementById("squareCost").innerHTML = document.getElementById("square").value * 1500;
	}
	else if (document.getElementById("square").value <= 4){
		document.getElementById("squareCost").innerHTML = document.getElementById("square").value * 800;
	}
	else if (document.getElementById("square").value <= 30){
		if (document.getElementById("maxWidth").checked == true || document.getElementById("colorRoof").checked == true){
			document.getElementById("squareCost").innerHTML = document.getElementById("square").value * 900;
		}
		else {
			document.getElementById("squareCost").innerHTML = document.getElementById("square").value * 700;
		}
	}
	else {
		if (document.getElementById("maxWidth").checked == true || document.getElementById("colorRoof").checked == true){
			document.getElementById("squareCost").innerHTML = document.getElementById("square").value * 850;
		}
		else {
			document.getElementById("squareCost").innerHTML = document.getElementById("square").value * 650;
		}
	}
	square = document.getElementById("squareCost").innerHTML;
}

function cornersCostFunction(){
	if (document.getElementById("corners").value > 4){
		document.getElementById("cornersCost").innerHTML = (document.getElementById("corners").value - 4) * 100;
	}
	else{
		document.getElementById("cornersCost").innerHTML = 0;
	}
	corners = document.getElementById("cornersCost").innerHTML;
}

function pipesCostFunction(){
	if (document.getElementById("pipes").value > 3){
		document.getElementById("pipesCost").innerHTML = (document.getElementById("pipes").value - 3) * 100;
	}
	else{
		document.getElementById("pipesCost").innerHTML = 0;
	}
	pipes = document.getElementById("pipesCost").innerHTML;
}

function spotLightsCostFunction(){
	if ((document.getElementById("square").value / 3) < document.getElementById("spotLights").value){
		document.getElementById("spotLightsCost").innerHTML = (document.getElementById("spotLights").value - Math.floor((document.getElementById("square").value / 3))) * 400;
		}
	else {
			document.getElementById("spotLightsCost").innerHTML = 0;
	}
	spotLights = document.getElementById("spotLightsCost").innerHTML;
}

function bigLightCostFunction(){
	if (document.getElementById("bigLight").checked == true){
		document.getElementById("bigLightCost").innerHTML = 500;
	}
	else{
		document.getElementById("bigLightCost").innerHTML = 0;
	}
	bigLight = document.getElementById("bigLightCost").innerHTML;
}

function corniceCostFunction(){
	if (document.getElementById("cornice").value > 0){
		document.getElementById("corniceCost").innerHTML = document.getElementById("cornice").value * 350;
	}
	else{
		document.getElementById("corniceCost").innerHTML = 0;
	}
	cornice = document.getElementById("corniceCost").innerHTML;
}

function ceramicTilesCostFunction(){
	if (document.getElementById("ceramicTiles").value > 0){
		document.getElementById("ceramicTilesCost").innerHTML = document.getElementById("ceramicTiles").value * 150;
	}
	else{
		document.getElementById("ceramicTilesCost").innerHTML = 0;
	}
	ceramicTiles = document.getElementById("ceramicTilesCost").innerHTML;
}

function timberCostFunction(){
	if (document.getElementById("timber").value > 0){
		document.getElementById("timberCost").innerHTML = document.getElementById("timber").value * 300;
	}
	else{
		document.getElementById("timberCost").innerHTML = 0;
	}
	timber = document.getElementById("timberCost").innerHTML;
}

function corniceNicheCostFunction(){
	if (document.getElementById("corniceNiche").value > 0){
		document.getElementById("corniceNicheCost").innerHTML = document.getElementById("corniceNiche").value * 500;
	}
	else{
		document.getElementById("corniceNicheCost").innerHTML = 0;
	}
	corniceNiche = document.getElementById("corniceNicheCost").innerHTML;
}

function creditCostFunction(){
	if (document.getElementById("credit").checked == true){
		document.getElementById("creditCost").innerHTML = 1000;
	}
	else{
		document.getElementById("creditCost").innerHTML = 0;
	}
	credit = document.getElementById("creditCost").innerHTML;
}

function totalFunction(){
	document.getElementById("total").innerHTML = (Number(square) + Number(corners) + Number(pipes) + Number(spotLights) + Number(bigLight) + Number(cornice) + Number(ceramicTiles) + Number(timber) + Number(corniceNiche) + Number(credit)) + " рублей";
}
//arrow to up
const toUp = () =>{

	let arrowContainer = document.createElement("div");
	arrowContainer.id = "arrowContainer";
	document.body.append(arrowContainer);

	let topArrowShadow = document.createElement("div");
	topArrowShadow.id = "topArrowShadow";
	document.getElementById("arrowContainer").append(topArrowShadow);

	let topArrow = document.createElement("div");
	topArrow.id = "topArrow";
	document.getElementById("topArrowShadow").append(topArrow);

	let mainArrowShadow = document.createElement("div");
	mainArrowShadow.id = "mainArrowShadow";
	document.getElementById("arrowContainer").append(mainArrowShadow);

	let mainArrow = document.createElement("div");
	mainArrow.id = "mainArrow";
	document.getElementById("mainArrowShadow").append(mainArrow);

	let bottomArrowShadow = document.createElement("div");
	bottomArrowShadow.id = "bottomArrowShadow";
	document.getElementById("arrowContainer").append(bottomArrowShadow);

	let bottomArrow = document.createElement("div");
	bottomArrow.id = "bottomArrow";
	document.getElementById("bottomArrowShadow").append(bottomArrow);

}

toUp();


window.addEventListener("scroll", () => {
	if (pageYOffset > 300){
		document.getElementById("arrowContainer").style.cssText = "opacity:1";
	} else {
		document.getElementById("arrowContainer").style.cssText = "opacity:0";
	}
});