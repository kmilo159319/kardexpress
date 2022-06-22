<?php
include 'conexiondb.php';
error_reporting(0);

$datos = $_POST['data'];
$codigo = $datos['idc_costos'];

$consulta= "DELETE from centro_costos where idc_costos = '$codigo';";

$ejecutar = mysqli_query($conectar,$consulta);   


if (!$ejecutar){
    echo ' error al guardar la informacion';
}else{
    $consulta = 'alter table centro_costos AUTO_INCREMENT=0;';
    $ejecutar = mysqli_query($conectar,$consulta);
};

?>