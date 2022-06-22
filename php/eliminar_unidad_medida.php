<?php
include 'conexiondb.php';
error_reporting(0);

$datos = $_POST['data'];
$codigo = $datos['codigo_und'];

$consulta= "DELETE from und_medida where codigo_und = $codigo;";

$ejecutar = mysqli_query($conectar,$consulta);      


if (!$ejecutar){
    echo ' error al guardar la informacion';
}else{
    $consulta = 'alter table und_medida AUTO_INCREMENT=0;';
    $ejecutar = mysqli_query($conectar,$consulta);
};

?>