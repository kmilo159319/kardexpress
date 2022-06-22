<?php
include 'conexiondb.php';


$consulta= "select * from centro_costos;";
$ejecutar = mysqli_query($conectar,$consulta);


foreach($ejecutar as $indice => $value)
{
     $data[$indice] = $value;  
}
  
echo json_encode($data);
 
?>