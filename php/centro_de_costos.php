<?php
include 'conexiondb.php';
error_reporting(0);

$nombre_centro_costos = $_POST['nombre_centrocostos'];
$consulta= "INSERT INTO centro_costos VALUES ('','$nombre_centro_costos')";



$resultado=$conectar->query("SELECT EXISTS (SELECT nombre FROM centro_costos WHERE nombre='$nombre_centro_costos');");
$row=mysqli_fetch_row($resultado);
if ($row[0]=="1") {                 
      echo "este nombre ya existe en la base de datos por favor ingrese otro";
}else{
    
   $ejecutar = mysqli_query($conectar,$consulta);
} 

?>