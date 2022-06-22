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

$consulta= "INSERT INTO tercero VALUES ($identificacion,
'$razon_social',
'$apellido',
'$direccion',
$telefono1,
$telefono2,
'$correo1',
'$correo2',
'$tipo_identificacion',
'$id_tipotercero')";


$resultado=$conectar->query("SELECT EXISTS (SELECT * FROM tercero WHERE identificacion ='$identificacion');");
$row=mysqli_fetch_row($resultado);
if ($row[0]=="1") {                 
    echo "este codigo ya existe en la base de datos por favor ingrese otro";
}else{ 
$ejecutar = mysqli_query($conectar,$consulta);   
} 

if (!$ejecutar){
    echo ' error al guardar la informacion';
};
?>