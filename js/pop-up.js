// Script para los POPUP

var btnAbrirPopup = document.getElementById('proposito'),
	overlay = document.getElementById('proposito1'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');


btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
    var escape="true"
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});
var btnAbrirPopup1 = document.getElementById('mision'),
	overlay1 = document.getElementById('mision1'),
	popup1 = document.getElementById('popup1'),
	btnCerrarPopup1 = document.getElementById('btn-cerrar-popup1');

btnAbrirPopup1.addEventListener('click', function(){
	overlay1.classList.add('active');
	popup1.classList.add('active');
});

btnCerrarPopup1.addEventListener('click', function(e){
	e.preventDefault();
	overlay1.classList.remove('active');
	popup1.classList.remove('active');
});

var btnAbrirPopup2 = document.getElementById('vision'),
	overlay2 = document.getElementById('vision1'),
	popup2 = document.getElementById('popup2'),
	btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');

btnAbrirPopup2.addEventListener('click', function(){
	overlay2.classList.add('active');
	popup2.classList.add('active');
});

btnCerrarPopup2.addEventListener('click', function(e){
	e.preventDefault();
	overlay2.classList.remove('active');
	popup2.classList.remove('active');
});

function accion(){
    console.log('está funcionando mi boton');
    var ancla = document.getElementsByClassName('nav-enlace');
    for(var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }
}


