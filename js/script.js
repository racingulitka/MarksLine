/*Открытие основного меню*/
function open1(){
	let uslovie;
	uslovie = getComputedStyle(menu_open_check1).display;
	if (uslovie == "none"){ 
		document.getElementById('menu').style.cssText = 
			"transform:rotate(0deg);border-radius:50%; animation:rotateMenu1 0.5s ease; font-weight:400;padding-top:5px;";
		document.getElementById("menu").innerHTML="X"
		for(let a=1;a<=7;a++){
			document.getElementById(`menu_open_check${a}`).style.cssText = 
				"display:block; animation:fadeIn 1s ease;";
		}
	}
	else{
		document.getElementById('menu').style.cssText = 
			"transform:rotate(90deg); animation:rotateMenu2 0.5s ease";
		document.getElementById("menu").innerHTML="|||"
		for(let b=1; b<=7; b++){
			document.getElementById(`menu_open_check${b}`).style.cssText = 
				"display:none;";
		}
	}
}