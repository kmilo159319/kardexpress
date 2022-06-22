<?php
include 'conexiondb.php';

$consultar= "select idcodigoproducto,nombre_producto as nombre from producto;";
$ejecutar = mysqli_query($conectar,$consultar);
foreach($ejecutar as $indice => $value)
{
     $data[$indice] = $value;  
}



echo json_encode($data);
 
?>