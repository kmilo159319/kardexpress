<?php
include 'conexiondb.php';
error_reporting(0);

$nombre_und = $_POST['nombre_und'];
$consulta= "INSERT INTO und_medida VALUES ('','$nombre_und')";

$resultado=$conectar->query("SELECT EXISTS (SELECT nombre FROM und_medida WHERE nombre='$nombre_und');");
$row=mysqli_fetch_row($resultado);



if ($row[0]=="1") {                 
    echo "este nombre ya existe en la base de datos por favor ingrese otro";
}else{
  
    $ejecutar = mysqli_query($conectar,$consulta);
} 



?>
