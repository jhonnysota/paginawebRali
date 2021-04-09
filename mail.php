<?php
// ASIGNAR ID DE NOMBRE A VARIABLE DE NOMBRE
    $connombre=$_POST['contactenosNombre'];
    $conapellido=$_POST['contactenosApellido'];
    $connumeromovil=$_POST['contactenosNumeroMovil'];
    $concorreoelectronico=$_POST['contactenosCorreoElectronico'];    
    $conempresadescripcion=$_POST['contactenosEmpresaDescripcion'];
    $conmensaje=$_POST['contactenosMensaje'];

// INDICAR DATOS DE ENVIO
    $destinatario="contactenos@ralitech.pe";
    $asunto="Cliente o Prospecto Buscando Contacto o Información";
    $contenido.="De: $connombre $conapellido \n";
    $contenido.="Número Móvil: $connumeromovil \n";
    $contenido.="Correo Electrónico:  $concorreoelectronico \n";    
    $contenido.="Empresa: $conempresadescripcion  \n";
    $contenido.="Mensaje: $conmensaje  \n";

// ENVIAR MENSAJE
    mail($destinatario,$asunto,$contenido);
    header('location:index.html')
?>