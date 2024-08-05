// Menu on click function
var menuBtn=document.getElementById('menu-btn');
var sideNav=document.getElementById('side-navbar');
var menu=document.getElementById('menu');
menuBtn.onclick=function(){
    if (sideNav.style.right=='-250px'){
        sideNav.style.right='0';
        menu.src='images/close.png';
    }
    else{
        sideNav.style.right='-250px';
        menu.src='images/menu.png';
    }
}
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1500,
	speedAsDuration: true
});
