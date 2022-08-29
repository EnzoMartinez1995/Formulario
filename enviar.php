<?php
    if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['proyecto'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $proyecto = $_POST['proyecto'];

    $from = $email;
    $to = "progresandobaradero@outlook.com";

    //mensaje al mail
    $name = "Nombre completo: " . $name;
    $proyecto = "Su proyecto: " . $proyecto;
    $headers = "Correo electrónico: " . $from;
  
    
    if (mail($to, $name, $proyecto, $headers,)) {
      echo 1;
    }else{
      echo 0;
    }

  }else{
    echo 0;
  }

header ('Location:envio.html');

?>