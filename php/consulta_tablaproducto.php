<?php
include 'conexiondb.php';

$consultarund= "select * from und_medida;";
$ejecutarund = mysqli_query($conectar,$consultarund);
foreach($ejecutarund as $indiceund => $valueund)
{
     $dataund[$indiceund] = $valueund;  
}


$consultarccosteo= "select * from calculo_costeo;";
$ejecutarccosteo = mysqli_query($conectar,$consultarccosteo);
foreach($ejecutarccosteo as $indiceccosteo => $valueccosteo)
{
     $dataccosteo[$indiceccosteo] = $valueccosteo;  
}

$consultarccostos= "select * from centro_costos;";
$ejecutarccostos = mysqli_query($conectar,$consultarccostos);
foreach($ejecutarccostos as $indiceccostos => $valueccostos)
{
     $dataccostos[$indiceccostos] = $valueccostos;  
}



$consultar= "select * from producto;";
$ejecutar = mysqli_query($conectar,$consultar);


foreach($ejecutar as $indice => $value)
{    
    $value['idcc_costeo'] = $dataccosteo[$value['idcc_costeo']-1];
    $value['codigo_und'] = $dataund[$value['codigo_und']-1];
    $value['idc_costos'] = $dataccostos[$value['idc_costos']-1]; 
     $data[$indice] = $value;  
}


echo json_encode($data);
 
?>