<?php
include 'conexiondb.php';

$numero_documento = $_POST['searchdata'];

$consultar= "SELECT * from movimiento_documento 
inner join tercero on movimiento_documento.identificacion = tercero.identificacion
inner join tipo_tercero on tercero.idtipotercero = tipo_tercero.idtipotercero
where numero_documento = '$numero_documento';
";
$ejecutar = mysqli_query($conectar,$consultar);

foreach($ejecutar as $indice => $value)
{
     $data[$indice] = $value;  
}


echo json_encode($data);

 
?>