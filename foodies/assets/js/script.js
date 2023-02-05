var menu_btn = document.getElementById('mbtn');
var menu_btn_close = document.getElementById('mbtn-close');
var mNav = document.getElementById('m-nav');

menu_btn.onclick = function(){
	mNav.style.left='0';
	menu_btn.style.display='none';
	menu_btn_close.style.display='block';
}

menu_btn_close.onclick = function(){
	mNav.style.left='-303px';
	menu_btn_close.style.display='none';
	menu_btn.style.display='block';
}