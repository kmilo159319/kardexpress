<?php
include 'conexiondb.php';

$numero_documento = $_POST['searchdata'];

$consultar= "SELECT * from movimiento_transaccion
inner join producto on movimiento_transaccion.idcodigoproducto = producto.idcodigoproducto
inner join und_medida on producto.codigo_und = und_medida.codigo_und
where numero_documento = '$numero_documento';
";
$ejecutar = mysqli_query($conectar,$consultar);

foreach($ejecutar as $indice => $value)
{
     $data[$indice] = $value;  
}


echo json_encode($data);

 
?>