<?php
include 'conexiondb.php';


$consultar= "select * from und_medida;";
$ejecutar = mysqli_query($conectar,$consultar);


foreach($ejecutar as $indice => $value)
{
     $data[$indice] = $value;  

}
  
echo json_encode($data);





?>