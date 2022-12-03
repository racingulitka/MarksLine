
let createAudio = () => {
	let audio = document.createElement('audio');
	document.body.append(audio);
	audio.id = 'audio';
	audio.src = 'img/audio.mp3';
}

createAudio();


function createGarlandContainer(){
	let garlandContainer = document.createElement('div');	// Создаем div контейнер для гирлянды
	document.getElementById('header').append(garlandContainer);	// помещаем его в конец тега header
	garlandContainer.id = "garlandContainer";	// присваиваем id

	garlandContainer.style.cssText = `	
		position:relative;
		display:flex;
		top:0px;
		left:0;
		width:100%;
		height:80px;
		background:url('img/garland1.png');
		background-size:contain;
		overflow:hidden;
		border-top:1px solid black;`;	//задаем стили
}

function createGreenBalls(){	// Функция для создания зеленых шаров
	let greenBall = document.createElement('div');	//создаем div элемент зеленый шар
	garlandContainer.append(greenBall);	// добавляем зеленый шар в контейнер для гирлянды
	greenBall.className = "greenBall";	// присваиваем зеленому шару имя класса

	let greenBallThread = document.createElement('div');	//создаем нитку для зеленого шара
	greenBall.append(greenBallThread);	//добавляем нитку для зеленого шара в зеленый шар
	greenBallThread.className = 'greenBallThread';	//задаем имя класса нитке для зеленого шара
	
	greenBallThread.style.cssText = `
		position:relative;
		top:-20px;
		left:10px;
		width: 1px;
		height: 20px;
		background: black;`;	//задаем стили нитке для зеленого шара

	let greenBallContainer = document.createElement('div');
	greenBall.append(greenBallContainer);
	greenBallContainer.className = 'greenBallContainer';
}

function createRedBalls(){	// Функция для создания красных шаров
	let redBall = document.createElement('div');	//создаем div элемент красный шар
	garlandContainer.append(redBall);	// добавляем красный шар в контейнер для гирлянды
	redBall.className = "redBall";	// присваиваем красному шару имя класса

	let redBallThread = document.createElement('div');	//создаем нитку для красного шара
	redBall.append(redBallThread);	//добавляем нитку для красного шара в красный шар
	redBallThread.className = 'redBallThread';	//задаем имя класса нитке для красного шара
	
	redBallThread.style.cssText = `
		position:relative;
		top:-50px;
		left:10px;
		width: 1px;
		height: 50px;
		background: black;`;	//задаем стили нитке для красного шара

	let redBallContainer = document.createElement('div');
	redBall.append(redBallContainer);
	redBallContainer.className = 'redBallContainer';
}

function createYellowBalls(){	// Функция для создания желтых шаров
	let yellowBall = document.createElement('div');	//создаем div элемент желтый шар
	garlandContainer.append(yellowBall);	// добавляем желтый шар в контейнер для гирлянды
	yellowBall.className = "yellowBall";	// присваиваем желтому шару имя класса

	let yellowBallThread = document.createElement('div');	//создаем нитку для желтого шара
	yellowBall.append(yellowBallThread);	//добавляем нитку для желтого шара в желтый шар
	yellowBallThread.className = 'yellowBallThread';	//задаем имя класса нитке для желтого шара
	
	yellowBallThread.style.cssText = `
		position:relative;
		top:-20px;
		left:10px;
		width: 1px;
		height: 20px;
		background: black;`;	//задаем стили нитке для желтого шара

	let yellowBallContainer = document.createElement('div');
	yellowBall.append(yellowBallContainer);
	yellowBallContainer.className = 'yellowBallContainer';
}

function createBlueBalls(){	// Функция для создания синих шаров
	let blueBall = document.createElement('div');	//создаем div элемент синий шар
	garlandContainer.append(blueBall);	// добавляем синий шар в контейнер для гирлянды
	blueBall.className = "blueBall";	// присваиваем синему шару имя класса

	let blueBallThread = document.createElement('div');	//создаем нитку для синего шара
	blueBall.append(blueBallThread);	//добавляем нитку для синего шара в синий шар
	blueBallThread.className = 'blueBallThread';	//задаем имя класса нитке для синего шара
	
	blueBallThread.style.cssText = `
		position:relative;
		top:-40px;
		left:10px;
		width: 1px;
		height: 40px;
		background: black;`;	//задаем стили нитке для синего шара

	let blueBallContainer = document.createElement('div');
	blueBall.append(blueBallContainer);
	blueBallContainer.className = 'blueBallContainer';
}

function createGarland(){
	let width = window.innerWidth;	//получаем ширину окна браузера в переменную
	let ballCount = 0;
	for (i = 0; i <= width; i+=45){
		switch (ballCount){
			case 0: {
				createGreenBalls();
				ballCount++;
				break;
			};
			case 1: {
				createRedBalls();
				ballCount++;
				break;
			};
			case 2: {
				createYellowBalls();
				ballCount++;
				break;
			};
			case 3: {
				createBlueBalls();
				ballCount = 0;
				break;
			};
		};
	}
}

createGarlandContainer();
createGarland();



/*-------------flashing green lights-----------------*/

setInterval(function(){
	for(i=0; i < document.getElementsByClassName('greenBall').length; i++){
		document.getElementsByClassName('greenBall')[i].style.cssText = "background:#08fb08; box-shadow: 0 0 5px 2px #08fb08;"
	}
}, 1000);

setInterval(function(){
	for(i=0; i < document.getElementsByClassName('greenBall').length; i++){
		document.getElementsByClassName('greenBall')[i].style.cssText = "background:green;"
	}
}, 800);

/*-------------flashing red lights-----------------*/

setInterval(function(){
	for(i=0; i < document.getElementsByClassName('redBall').length; i++){
		document.getElementsByClassName('redBall')[i].style.cssText = "background:#ff1a30; box-shadow: 0 0 5px 2px #ff1a30;"
	}
}, 1500);

setInterval(function(){
	for(i=0; i < document.getElementsByClassName('redBall').length; i++){
		document.getElementsByClassName('redBall')[i].style.cssText = "background:#bf0000;"
	}
}, 2000);

/*-------------flashing yellow lights-----------------*/

setInterval(function(){
	for(i=0; i < document.getElementsByClassName('yellowBall').length; i++){
		document.getElementsByClassName('yellowBall')[i].style.cssText = "background:#ffff00; box-shadow: 0 0 5px 2px #ffff00;"
	}
}, 1300);

setInterval(function(){
	for(i=0; i < document.getElementsByClassName('yellowBall').length; i++){
		document.getElementsByClassName('yellowBall')[i].style.cssText = "background:#dbdb00;"
	}
}, 1000);

/*-------------flashing blue lights-----------------*/

setInterval(function(){
	for(i=0; i < document.getElementsByClassName('blueBall').length; i++){
		document.getElementsByClassName('blueBall')[i].style.cssText = "background:#0089ff; box-shadow: 0 0 5px 2px #0089ff;"
	}
}, 1400);

setInterval(function(){
	for(i=0; i < document.getElementsByClassName('blueBall').length; i++){
		document.getElementsByClassName('blueBall')[i].style.cssText = "background:blue;"
	}
}, 1200);

let greenBallContainer = document.getElementsByClassName('greenBallContainer');
let greenBall = document.getElementsByClassName('greenBall');
let redBallContainer = document.getElementsByClassName('redBallContainer');
let redBall = document.getElementsByClassName('redBall');
let yellowBallContainer = document.getElementsByClassName('yellowBallContainer');
let yellowBall = document.getElementsByClassName('yellowBall');
let blueBallContainer = document.getElementsByClassName('blueBallContainer');
let blueBall = document.getElementsByClassName('blueBall');

function ballsAnimation1(){
	for (let i = 0; i < greenBallContainer.length; i++){
		greenBallContainer[i].addEventListener('mouseenter', function(){
			greenBall[i].style.cssText = "transform:translate(15px, -5px) rotate(-15deg); transition:0.2s;";
			document.getElementById('audio').currentTime = 0.2;
			document.getElementById('audio').play();
		});
	}
	for (let i = 0; i < redBallContainer.length; i++){
		redBallContainer[i].addEventListener('mouseenter', function(){
			redBall[i].style.cssText = "transform:translate(15px, -5px) rotate(-15deg); transition:0.2s;";
			document.getElementById('audio').currentTime = 0.2;
			document.getElementById('audio').play();
		});
	}
	for (let i = 0; i < yellowBallContainer.length; i++){
		yellowBallContainer[i].addEventListener('mouseenter', function(){
			yellowBall[i].style.cssText = "transform:translate(15px, -5px) rotate(-15deg); transition:0.2s;";
			document.getElementById('audio').currentTime = 0.2;
			document.getElementById('audio').play();
		});
	}
	for (let i = 0; i < blueBallContainer.length; i++){
		blueBallContainer[i].addEventListener('mouseenter', function(){
			blueBall[i].style.cssText = "transform:translate(15px, -5px) rotate(-15deg); transition:0.2s;";
			document.getElementById('audio').currentTime = 0.2;
			document.getElementById('audio').play();
		});
	}
}

function ballsAnimation2(){
	for (let i = 0; i < greenBallContainer.length; i++){
		greenBallContainer[i].addEventListener('mouseleave', function(){
			greenBall[i].style.cssText = "transform:translate(-10px, -2px) rotate(10deg); transition:0.2s;";
		});
	}
	for (let i = 0; i < redBallContainer.length; i++){
		redBallContainer[i].addEventListener('mouseleave', function(){
			redBall[i].style.cssText = "transform:translate(-10px, -2px) rotate(10deg); transition:0.2s;";
		});
	}
	for (let i = 0; i < yellowBallContainer.length; i++){
		yellowBallContainer[i].addEventListener('mouseleave', function(){
			yellowBall[i].style.cssText = "transform:translate(-10px, -2px) rotate(10deg); transition:0.2s;";
		});
	}
	for (let i = 0; i < blueBallContainer.length; i++){
		blueBallContainer[i].addEventListener('mouseleave', function(){
			blueBall[i].style.cssText = "transform:translate(-10px, -2px) rotate(10deg); transition:0.2s;";
		});
	}
}

function ballsAnimation3(){
	for (let i = 0; i < greenBallContainer.length; i++){
		setInterval(function(){
			if (greenBall[i].style.transform != "translate(0px, 0px) rotate(0deg)"){
				greenBall[i].style.cssText = "transform:translate(0px, 0px) rotate(0deg); transition:0.2s;";
			}
		}, 500);
	}
	for (let i = 0; i < redBallContainer.length; i++){
		setInterval(function(){
			if (redBall[i].style.transform != "translate(0px, 0px) rotate(0deg)"){
				redBall[i].style.cssText = "transform:translate(0px, 0px) rotate(0deg); transition:0.2s;";
			}
		}, 500);
	}
	for (let i = 0; i < yellowBallContainer.length; i++){
		setInterval(function(){
			if (yellowBall[i].style.transform != "translate(0px, 0px) rotate(0deg)"){
				yellowBall[i].style.cssText = "transform:translate(0px, 0px) rotate(0deg); transition:0.2s;";
			}
		}, 500);
	}
	for (let i = 0; i < blueBallContainer.length; i++){
		setInterval(function(){
			if (blueBall[i].style.transform != "translate(0px, 0px) rotate(0deg)"){
				blueBall[i].style.cssText = "transform:translate(0px, 0px) rotate(0deg); transition:0.2s;";
			}
		}, 500);
	}
}

ballsAnimation1();
ballsAnimation2();
ballsAnimation3();