<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/navegador.css">
    <link rel="stylesheet" href="/css/barrasuperior.css">
    <link rel="stylesheet" href="/css/responsive.css">
    <link rel="stylesheet" href="/css/index.css">
    <link rel="stylesheet" href="/css/contenido.css">
    <link rel="stylesheet" href="/css/crearproducto.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/css/error_message.css">
    <script src="https://kit.fontawesome.com/06948a739e.js" crossorigin="anonymous"></script>
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>

    <title>crear producto</title> 
</head>
<body>
    <div class="transicion-on" onclick="Scroll()"></div>
    <nav class="nav2">
      <div class="img1 fas fa-users icons"></div>
      <br>
      <div><p >camilo Yepes </p></div>
          <div class="fas fa-align-justify burger icons " onclick="Scroll()"></div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <ul class="item" id='item1' onclick="cambio(1)" >parametrizacion</ul>
      <div  class="block" id="block1">
       <li><a href="">subitem1</a></li>
       <li><a href="">subitem1</a></li>
       <li><a href="">subitem1</a></li>
       <li><a href="">subitem1</a></li>
      </div> 
      <ul class="item" id='item2' onclick="cambio(2)">inventario</ul>
      <div class="block" id="block2">
      <li><a href="/html/crear_tercero.php">terceros</a></li>
      <li><a href="/html/crearproducto.php">productos</a></li>
      <li><a href="/html/und_medida.php">und medida</a></li>
      <li><a href="/html/centro_de_costos.php">c. de costos</a></li>
     </div>
      <ul class="item" id='item3' onclick="cambio(3)">movimientos</ul>
      <div class="block" id="block3">
      <li><a href="">registrar entrada</a></li>
      <li><a href="">registrar salida</a></li>
      <li><a href="">subitem3</a></li>
      <li><a href="">subitem4</a></li>
     </div>
      <div class="img2">
      </div>
     <br>
     <ul class="item" id='item4' onclick="cambio(4)">primer item</ul>
     <div  class="block" id="block4">
      <li><a href="">subitem1</a></li>
      <li><a href="">subitem1</a></li>
      <li><a href="">subitem1</a></li>
      <li><a href="">subitem1</a></li>
     </div> 
     <ul class="item" id='item5' onclick="cambio(5)">segundo item</ul>
     <div class="block" id="block5">
      <li><a href="">subitem1</a></li>
      <li><a href="">subitem1</a></li>
      <li><a href="">subitem1</a></li>
      <li><a href="">subitem1</a></li>
    </div>
     <ul class="item" id='item6' onclick="cambio(6)">tercer item</ul>
     <div class="block" id="block6">
      <li><a href="">subitem1</a></li>
      <li><a href="">subitem1</a></li>
      <li><a href="">subitem1</a></li>
      <li><a href="">subitem1</a></li>
    </div>
     <div class="img2"></div>
    </nav>
    <div class="encabezado">
            <div class="informacion">
                <p>kardexpress</p>
                <p id="brtexto2">acermetalicas</p>
                <p id="brtexto3">23/10/2021</p>
                <div class="brbtn">
                <input type="button" value="salir" class="btn btnsalir">
                </div>
            </div>
      </div>
    <section class="contenido">
        <div class="box1">       
          <div class="box2  table_producto">
            <div class="titulo-table_producto"> 
                <h2>productos creados</h2>
                <div  id="btn-pop-up"> <p class="fas fa-plus"> agregar</p></div>
            </div>
            <div class="titulotable">
              <table class="theader">
               <thead>
                 <tr>
                   <th id="tp1"><h1>codigo</h1></th>
                   <th id="tp2"><h1>nombre</h1></th>
                   <th id="tp3"><h1>marca</h1></th>
                   <th id="tp4"><h1>c.costeo</h1></th>
                   <th id="tp5"><h1>und / medida</h1></th>
                   <th id="tp6"><h1>ref adicional</h1></th>
                   <th id="tp7"><h1>centro de costos</h1></th>
                   <th id="tp8"><h1>iva</h1></th>
                   <th id="tp9"><h1>precio compra</h1></th>
                   <th id="tp10"><h1 >precio venta</h1></th>
                   <th id="tp11"><h1 >observaciones</h1></th>
                   <th id="tp12"><h1 >campo reservado</h1></th>
                 </tr>
               </thead>
             </table>
           </div>
   
            <div class="contenido-table_producto">
              <table class="container">
                <thead>
                  <tr>
                    <th><h1>codigo</h1></th>
                    <th><h1>nombre</h1></th>
                    <th><h1>marca</h1></th>
                    <th><h1>c.costeo</h1></th>
                    <th><h1>und / medida</h1></th>
                    <th><h1>ref adicional</h1></th>
                    <th><h1>centro de costos</h1></th>
                    <th><h1>iva</h1></th>
                    <th><h1>precio compra</h1></th>
                    <th><h1>precio venta</h1></th>
                    <th><h1>observaciones</h1></th>
                    <th><h1>campo reservado</h1></th>
                  </tr>
                </thead>
                <tbody id="tablacontenidoproducto">
                </tbody>
              </table>
            </div>
            <form action="#" class="cd-popup box2 productocontenedor pop" method="post" id="crearproducto" role="alert">
            <div class="datos-head">
              <span class="span">✖</span>
                <div class="img-producto">
                </div>
                <p class="tituloproducto">Mis productos</p>
              </div>
              <div class="datos-insert">
             <li id="p1"><label for="">codigo del producto:</label><br><input id="codigo-producto" type="text" class="input-requered"  name="idcodigoproducto" placeholder="ingrese un codigo" ></li>
             <li id="p2"><label for="">nombre del producto:</label><br><input id="nombre-producto" type="text" class="input-requered"  name="nombre_producto" placeholder="(ejem ) esfero Bic negro"></li>
             <li id="p3"><label for="">marca:</label><br><input type="text" name="marca"></li>
             <li id="p4">

               <label for="">calculo de costeo:</label>
                <input id="calculo-costeo"  list="calculocosteo" name="idcc_costeo" class="input-orange"  placeholder="(peps,ueps,promedio)" >
                <datalist id="calculocosteo"></datalist></li>

             <li id="p5"><label for="">und/medida:</label>
              <input id="und-medida" list="datalistund" name="codigo_und" class="input-orange" placeholder="seleccione una und de medida" >
              <datalist id="datalistund"></datalist></li>

             <li id="p6"><label for="">referencia adicional:</label><br><input type="text" name="ref_adicional" ></li>
             <li id="p7"><label for="">centro de costos:</label><br>
              <input id="centro-costos" list="dataliscc" class="input-requered" name="idc_costos" placeholder="elija un centro de costos">
              <datalist id="dataliscc"></datalist></li>

             <li id="p8"><label for="">imp iva (%):</label><br><input id="p-iva" type="text" class="input-requered"  name="imp_iva" placeholder="tarifa de retencion"></li>
             <li id="p9"><label for="">precio compra (opc):</label><br><input id="precio-compra" type="text" name="precio_compra" placeholder="inserte un numero"></li>
             <li id="p10"><label for="">precio de venta (opc):</label><br><input id="precio-venta" type="text"  name="precio_venta"></li>
             <li id="p11"><label for="">observaciones:</label><br><input type="text" class="p11" name="observaciones"></li> 
              </div>
              <div class="datos-footer">
              <input type="button" value="guardar" class="btn pbtn" id="pbtn_1">
              <input type="reset" value="nuevo" class="btn pbtn">
              <input type="button" value="editar" class="btn pbtn" id="pbtn_3">  
              </div>
          </form>
           </div>
      </div>  
    </section>
    <div id="toast"></div>
    <script  src="/js/navegador.js"></script>
    <script   src="/js/ajax.js"></script>
    <script src="/js/bloqueo_input.js"></script>
</body>
</html>