<?php
include 'conexiondb.php';
error_reporting(0);

$datos = $_POST['data'];
$codigo = $datos['identificacion'];

$consulta= "DELETE from tercero where identificacion = '$codigo';";

$ejecutar = mysqli_query($conectar,$consulta);   


if (!$ejecutar){
    echo ' error al guardar la informacion';
};

?>