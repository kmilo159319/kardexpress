<?php
include 'conexiondb.php';
$doc_numero_producto = $_POST['doc_numero_producto'];
$doc_nombre_producto= $_POST['doc_nombre_producto'];


switch (true) {
     case ($doc_numero_producto != "" && $doc_nombre_producto === ""):
          $consulta= "select * from producto  inner join und_medida on und_medida.codigo_und = producto.codigo_und where idcodigoproducto = $doc_numero_producto;";
           $ejecutar = mysqli_query($conectar,$consulta);
         break;
     case ($doc_numero_producto === "" && $doc_nombre_producto  != "");
          $consulta= "select * from producto  inner join und_medida on und_medida.codigo_und = producto.codigo_und where nombre_producto = '$doc_nombre_producto';";
           $ejecutar = mysqli_query($conectar,$consulta);
         break;
     case ($doc_numero_producto === "" && $doc_nombre_producto  === ""):
          $consulta= "select * from producto  inner join und_medida on und_medida.codigo_und = producto.codigo_und where idcodigoproducto = '';";
           $ejecutar = mysqli_query($conectar,$consulta);
         break;
     case ($doc_numero_producto != "" && $doc_nombre_producto  != ""):
          $consulta= "select * from producto  inner join und_medida on und_medida.codigo_und = producto.codigo_und where idcodigoproducto = $doc_numero_producto adn  nombre_producto = $doc_nombre_producto;";
          $ejecutar = mysqli_query($conectar,$consulta);
         break;
     }


foreach($ejecutar as $indice => $value)
{
     $data[$indice] = $value;  
}
 



if ($data === null){
    $data = Array ( '0'=> Array ( 
                    'idcc_costeo' => '',
                    'codigo_und' => '',
                    'nombre_producto' => '',
                    'idc_costos' => '',
                    'marca' => '',
                    'imp_iva' => '',
                    'precio_compra' => '',
                    'precio_venta' => '',
                    'ref_adicional' => '',
                    'observaciones' => '',
                    'nombre' => '',
                    'idcodigoproducto' => '')); 
     echo json_encode($data);
}else{
     echo json_encode($data); 
  }


?>