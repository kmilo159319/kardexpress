<?php
include 'conexiondb.php';
$numero_cedula = $_POST['numero_cedula'];
$doc_razon_social = $_POST['doc_razon_social'];

switch (true) {
     case ($doc_razon_social === "" && $numero_cedula != ""):
          $consulta= "select * from tercero where identificacion = '$numero_cedula'";
          $ejecutar = mysqli_query($conectar,$consulta);
         break;
     case ($doc_razon_social != "" && $numero_cedula === "");
          $consulta= "select * from tercero where razon_social ='$doc_razon_social'";
          $ejecutar = mysqli_query($conectar,$consulta);
         break;
     case ($doc_razon_social === "" && $numero_cedula === ""):
          $consulta= "select * from tercero where identificacion ='';";
         break;
     case ($doc_razon_social != "" && $numero_cedula != ""):
          $consulta= "select * from tercero where identificacion = $numero_cedula and razon_social ='$doc_razon_social;";
         break;
}



foreach($ejecutar as $indice => $value)
{
     $data[$indice] = $value;  
}
 
if ($data === null){
    $data = Array ( '0'=> Array ( 
                    'identificacion' => '',
                    'razon_social' => '',
                    'apellido' => '',
                    'direccion' => '',
                    'telefono1' => '',
                    'telefono2' => '',
                    'correo1' => '',
                    'correo2' => '',
                    'tipo_identificacion' => '',
                    'idtipotercero' => '')); 
     echo json_encode($data);
}else{

     echo json_encode($data);

 }



?>