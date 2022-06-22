<?php
include 'conexiondb.php';
error_reporting(0);

$datos = $_POST['data'];
$codigo = $datos['numero_documento'];

$consulta= "DELETE from movimiento_transaccion where numero_documento = '$codigo';";
$consulta2= "DELETE from movimiento_documento where numero_documento = '$codigo';";
$ejecutar = mysqli_query($conectar,$consulta);   

if (!$ejecutar){
    echo ' error al guardar la informacion';
}else{
    $ejecutar2 = mysqli_query($conectar,$consulta2); 
    if (!$ejecutar2){
    echo ' error al guardar la informacion';
    }
};

?>