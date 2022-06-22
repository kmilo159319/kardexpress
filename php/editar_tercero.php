<?php
include 'conexiondb.php';
error_reporting(0);

$identificacion = $_POST['identificacion'];
$razon_social = $_POST['razon_social'];
$apellido = $_POST['apellido'] ?? null;
$direccion = $_POST['direccion'];
$telefono1 = (empty($_POST['telefono_1'])) ? 0 : $_POST['telefono_1'];    
$telefono2 = (empty($_POST['telefono2'])) ? 0 : $_POST['telefono2']; 
$correo1 = $_POST['correo1']  ?? null;
$correo2 = $_POST['correo2']  ?? null;
$tipo_identificacion = $_POST['tipo_identificacion'];
$idtipotercero = $_POST['idtipotercero'];
$consultaid= "select idtipotercero from tipo_tercero where nombre ='$idtipotercero'";
$ejecutarid = mysqli_query($conectar,$consultaid);foreach($ejecutarid as $indice => $value)
{$id_tipotercero = ($value['idtipotercero']);}     

$consulta= "UPDATE tercero set identificacion = $identificacion,
razon_social = '$razon_social',
apellido = '$apellido',
direccion = '$direccion', 
telefono1 = $telefono1, 
telefono2 = $telefono2, 
correo1 = '$correo1',
correo2 = '$correo2',
tipo_identificacion = '$tipo_identificacion',
idtipotercero = '$id_tipotercero'
where identificacion = $identificacion;";


$ejecutar = mysqli_query($conectar,$consulta);   

if (!$ejecutar){
    echo ' error al guardar la informacion';
};
?>