window.onload = function(){
	prepareLogo();
}

function prepareLogo(){
	var logo;
	logo=document.getElementById("logochange");
	logo.addEventListener("mouseover",mauveLogo);
	logo.addEventListener("mouseout",peachLogo);
}
function changeLogo(peachLogo){
	var logomauve;
	logomauve=document.getElementById("logochange");
	if (peachLogo) {
		logomauve.setAttribute("src", "images/kellymauve.png");
	} else {
		logomauve.setAttribute("src", "images/kellypeach.png");
	}
}
function peachLogo(){
	changeLogo(false);
}

function mauveLogo(){
	changeLogo(true);
}

