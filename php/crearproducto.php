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

$consulta= "INSERT INTO producto VALUES ($idcodigoproducto,
$idcalculocosteo,
$idunidadmedida,
'$nombre_producto',
$idcentrocostos,
'$marca',
$imp_iva,
$precio_compra,
$precio_venta,
'$ref_adicional',
'$observaciones')";

$resultado=$conectar->query("SELECT EXISTS (SELECT * FROM producto WHERE idcodigoproducto='$idcodigoproducto');");
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
