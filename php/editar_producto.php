<?php
include 'conexiondb.php';
error_reporting(0);

$idcodigoproducto = $_POST['idcodigoproducto'];
$nombre_producto = $_POST['nombre_producto'];
$marca = $_POST['marca'] ?? null;
$idcc_costeo = $_POST['idcc_costeo'];
$consultaid= "select idcc_costeo from calculo_costeo where nombre= '$idcc_costeo';";$ejecutarid = mysqli_query($conectar,$consultaid);foreach($ejecutarid as $indice => $value)
{$idcalculocosteo = ($value['idcc_costeo']);}
$codigo_und = $_POST['codigo_und'];
$consultaid= "select codigo_und from und_medida where nombre ='$codigo_und'";$ejecutarid = mysqli_query($conectar,$consultaid);foreach($ejecutarid as $indice => $value)
{$idunidadmedida = ($value['codigo_und']);}
$idc_costos = $_POST['idc_costos'];
$consultaid= "select idc_costos from centro_costos where nombre ='$idc_costos'";$ejecutarid = mysqli_query($conectar,$consultaid);foreach($ejecutarid as $indice => $value)
{$idcentrocostos = ($value['idc_costos']);}
$imp_iva = $_POST['imp_iva'];
$precio_compra = (empty($_POST['precio_compra'])) ? 0 : $_POST['precio_compra'];           
$precio_venta = (empty($_POST['precio_venta'])) ? 0 : $_POST['precio_venta'];
$ref_adicional = $_POST['ref_adicional']  ?? null;
$observaciones = $_POST['observaciones']  ?? null;

$consulta= "UPDATE producto set idcc_costeo = $idcalculocosteo,
codigo_und = $idunidadmedida,
nombre_producto = '$nombre_producto',
idc_costos = $idcentrocostos, 
marca = '$marca', 
imp_iva = $imp_iva, 
precio_compra = $precio_compra,
precio_venta = $precio_venta,
ref_adicional = '$ref_adicional',
observaciones = '$observaciones'
where idcodigoproducto = $idcodigoproducto;  ";


$ejecutar = mysqli_query($conectar,$consulta);   

if (!$ejecutar){
    echo 'error al editar_producto';
};

?>