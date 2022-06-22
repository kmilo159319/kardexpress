<?php
include 'conexiondb.php';
error_reporting(0);

//$docp8 = $_POST['docp8'];

$doce1 = $_POST['doce1'];
$doce2 = $_POST['doce2'];
$doce3 = $_POST['doce3'];
$doce4 = $_POST['doce4'];
$doce5 = $_POST['doce5'];
$doce6 = $_POST['doce6'];
$doce7 = $_POST['doce7'];
$doce8 = $_POST['doce8'];
$doce9 = $_POST['doce9'];
$doce10 = $_POST['doce10'];
$doce11 = $_POST['doce11'];
$doce12 = $_POST['doce12'];
$doce13 = $_POST['doce13'];
$docp1 = $_POST['docp1'];
$docp2 = $_POST['docp2'];
$docp3 = $_POST['docp3'];
$docp4 = $_POST['docp4'];
$docp5 = $_POST['docp5'];
$docp6 = $_POST['docp6'];
$docp7 = $_POST['docp7'];


$consulta = "INSERT INTO movimiento_documento 
values($doce11,$doce1,$doce10,'$doce12','$doce9',$doce13)";
$ejecutar = mysqli_query($conectar,$consulta);
if (!$ejecutar){
    echo ' error al guardar la informacion';
    
};



for($i=0 ;$i < count($docp1); $i++){

$consulta = "INSERT INTO movimiento_transaccion 
values('',$docp4[$i],$docp7[$i],$docp6[$i],$doce10,$docp1[$i],$doce11,$doce1,$doce13)";
$ejecutar = mysqli_query($conectar,$consulta);
if (!$ejecutar){
    echo ' error al guardar la informacion';
}

};

?>
