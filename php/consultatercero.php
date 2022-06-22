<?php
include 'conexiondb.php';

$consultar= "select identificacion,razon_social as nombre from tercero;";
$ejecutar = mysqli_query($conectar,$consultar);
foreach($ejecutar as $indice => $value)
{
     $data[$indice] = $value;  
}


echo json_encode($data);

 
?>