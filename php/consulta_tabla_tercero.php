<?php
include 'conexiondb.php';

$consultar= "select * from tipo_tercero;";
$ejecutar = mysqli_query($conectar,$consultar);
foreach($ejecutar as $indicett => $valuett)
{
     $datatt[$indicett] = $valuett;  
}




$consultar= "select * from tercero;";
$ejecutar = mysqli_query($conectar,$consultar);


foreach($ejecutar as $indice => $value)
{    
    $value['idtipotercero'] = $datatt[$value['idtipotercero']-1];
     $data[$indice] = $value;  
}


echo json_encode($data);

 
?>