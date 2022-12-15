window.onload = () => {
	document.getElementById("arrowContainer").addEventListener("click", () => {
		window.scrollTo(0, 0);
		document.getElementById("arrowContainer").style.cssText = "animation: anim1 1.2s ease-out; opacity:0;";
		setTimeout(() => {
			document.getElementById("arrowContainer").style.cssText = "animation: toTheUp 1.2s ease-in-out infinite; opacity:0;";
		}, 1200);
	});

};

	

let toUp = () => {

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
	console.log(pageYOffset);

	if (pageYOffset > 300){
		document.getElementById("arrowContainer").style.cssText = "opacity:1";
	} else {
		document.getElementById("arrowContainer").style.cssText = "opacity:0";
	}

});
