<?php
include 'conexiondb.php';

$consultar= "SELECT sum(preciound) as precio_total,movimiento_transaccion.numero_documento,movimiento_transaccion.identificacion,
tercero.razon_social,movimiento_documento.fecha,apellido,movimiento_documento.docref,movimiento_documento.observaciones,
movimiento_transaccion.iva,idmovimiento.descripcion
from movimiento_transaccion
inner join tercero on movimiento_transaccion.identificacion = tercero.identificacion
inner join movimiento_documento on movimiento_documento.numero_documento = movimiento_transaccion.numero_documento
inner join idmovimiento on idmovimiento.id_movimiento = movimiento_transaccion.id_movimiento
group by numero_documento
;";
$ejecutar = mysqli_query($conectar,$consultar);
foreach($ejecutar as $indice => $value)
{
     $data[$indice] = $value;  
}



echo json_encode($data);
 
?>