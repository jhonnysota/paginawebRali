$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>50){
        $('#menu').addClass('header2');
    }else{
        $('#menu').removeClass('header2');
    }
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>50){
      $('#scroll-down').addClass('scroll-down2');
    }else{
      $('#scroll-down').removeClass('.scroll-down');  
    }  
  });
});

// CAMBIAR LOGO EN NAVBAR
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>50){
      $('#logoRalitech').attr('src', '/images/logoRalitechBlanco.png');
    }else{
      $('#logoRalitech').attr('src', '/images/LogoRalitech.png');
    }
  });
});

// TIEMPO DE INTERVALO DE CARRUSEL
$('.carousel').carousel({
  interval: 3000
})

// SCRIPT PARA ICONOS DE MENSAJERIA
document.querySelector('.fab').addEventListener('click',function(e) {
  document.querySelector('.box').classList.toggle('box-active');
  document.querySelector('.fab').classList.toggle('fab-active'); 
});


document.querySelector('.item4').addEventListener('click',function(e) {
	document.querySelector('.box').classList.toggle('box-active');
});
document.querySelector('.btn-cerrar-popup2').addEventListener('click',function(e) {
	document.querySelector('.fab').classList.toggle('fab-active');
});

$('#navproducto').mouseover(function(){
  $('.dropdown-menu').toggle();
  
  
});
// $('#productopack').mouseover(function(){
//   $('.dropdown-menu').toggle();
  
  
// });

$('#navproducto').mouseout(function(){
  $('.dropdown-menu').hide();
});


