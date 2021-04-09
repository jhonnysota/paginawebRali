<?php
// ASIGNAR ID DE NOMBRE A VARIABLE DE NOMBRE
    $popnombreyapellido=$_POST['nombreyapellidopop'];
    $popcorreoelectronico=$_POST['correoElectronicopop'];    
    $popmensaje=$_POST['mensajepop'];

// INDICAR DATOS DE ENVIO
    $destinatario="contactenos@ralitech.pe";
    $asunto="Cliente o Prospecto Buscando Contacto o Información";
    $contenido.="De: $popnombreyapellido \n";
    $contenido.="Correo Electrónico:  $popcorreoelectronico \n";    
    $contenido.="Mensaje: $popmensaje  \n";

// ENVIAR MENSAJE
    mail($destinatario,$asunto,$contenido);
    header('location:index.html')
?>