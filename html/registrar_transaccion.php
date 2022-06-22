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
    <link rel="stylesheet" href="/css/transacciones.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/css/error_message.css">
    <script src="https://kit.fontawesome.com/06948a739e.js" crossorigin="anonymous"></script>
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.6/js/dataTables.buttons.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.6.2/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.print.min.js"></script>
    <title>registro de movimientos</title>
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
                <p id="brtexto3" ><?php echo date('Y-n-j' ) ?></p>
                <div class="brbtn">
                <input type="button" value="salir" class="btn btnsalir">
                </div>
            </div>
      </div>
  <section class="contenido">
        <div class="box1">       
      <div class="box2  table_transaccion">
       <div class="titulo-table_transaccion"> 
           <h2>transacciones realizadas</h2>
           <div class="titulotable">
        </div>
       </div>
       <div class="contenido-table_transaccion">
        <table id="tabla" class="container" cellspacing="0" width="100%">
          <thead>
            <tr>
                <th>No documento</th>
                <th>fecha</th>
                <th>identificacion</th>
                <th>razon social/nombre</th>
                <th>apellidos</th>
                <th>doc ref</th>
                <th>observaciones</th>
                <th>iva total</th>
                <th>valor total</th>
                <th>tipo de documento</th>
                <th>reservado para mas adelante</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      </div>
      <form id="creartransaccion1" action="#" class="box2 transaccioncontenedor pop" method="post">
        <div class="datos-head">
          <span class="span">✖</span>
          <div class="img-movimiento"></div>
          <a class="titulotransaccion" id="titulo_transaccion"></a>
          <li id="m17"><label for="">No documento:</label><br><input  id="doc_numero" type="text"   name=""></li>
          <li id="m18"><label for="">fecha:</label><br><input  id="doc_fecha" type="date"   name="" value="<?php echo date('Y-n-j' ); ?>"  ></li>
          <div id="entrada_no_si"><li id="m19"><label for="">doc ref:</label><br><input  class="" id="doc_ref" type="text"   name=""></li></div>
          
        </div>
        <div class="datos-insert">
       <li id="m1"><label for="">Tipo:</label>
       <input id="doc_tipo_dentificacion" type="text" name="tipo_identificacion" class="input-orange doc_entrada" >
      <li id="m2"><label for="">identificacion:</label><br><input class="dato-digitado" id="numero_identificacion" list="doc-numero-identificacion"  name="numero_identificacion"><datalist id="doc-numero-identificacion"></datalist></li>
      <li id="m3"><label for="">razon social:</label><br><input class="dato-digitado" id="doc_razon_social" list="doc-razon-social"   name="rsocial"><datalist id="doc-razon-social"></datalist></li>
      <li id="m4"><label for="">apellidos:</label><br><input  class="doc_entrada" id="doc_apellidos" type="text"   name=""></li>
      <li id="m5"><label for="">direccion:</label><br><input class="doc_entrada" id="doc_direccion" type="text"   name=""></li>
      <li id="m6"><label for="">telefono:</label><br><input class="doc_entrada" id="doc_telefono" type="text"   name="" ></li>
      <li id="m7"><label for="">correo:</label><br><input class="doc_entrada" id="doc_correo" type="text"   name=""></li>
      <li id="m8"><label for="">Telefono2:</label><br><input class="doc_entrada" id="doc_telefono2" type="text"   name=""></li>
      <li id="m9"><label for="">observaciones:</label><br><input  id="doc_obseervaciones" type="text"   name=""></li>
      </div>
      <div class="titulotransaccion2">
         <p>agregar producto</p>
         <button type="button"  class="fas fa-plus btn apbtn " id=""> agregar</button>
         <div class="m17"><p for="">cantidad disponible</p><div> 50</div></div>
      </div> 
      <div class="datos-insert2">
       <li id="m10"><label for="">codigo:</label><br><input  class="dato-prod-digitado" id="doc_numero_producto" list="doc-numero-producto"   name=""><datalist id="doc-numero-producto"></datalist></li>
       <li id="m11"><label for="">nombre:</label><br><input class="dato-prod-digitado" id="doc_nombre_producto" list="doc-nombre-producto"   name=""><datalist id="doc-nombre-producto"></datalist></li>
       <li id="m12"><label for="">marca:</label><br><input class="doc_entrada" id="doc_marca" type="text"   name="telefono2"></li>
       <li id="m13"><label for="">cantidad:</label><br><input  id="doc_cantidad" type="text"   name="telefono2"></li>
       <li id="m14"><label for="">und/medida:</label><br><input class="doc_entrada" id="doc_und_medida" type="text"   name="telefono2"></li>
       <li id="m15"><label for="" id="titulo_precio"></label><br><input  id="doc_precio_compra" type="text"   name="telefono2"></li>
       <li id="m16"><label for="">iva:</label><br><input id="doc_iva" type="text"   name="telefono2"></li>
       <li id="m16"><label for="">subtotal:</label><br><input id="doc_iva" type="text"   name="telefono2"></li>
       <li id="m16"><label for="">total:</label><br><input id="doc_iva" type="text"   name="telefono2"></li>
         </div>
        <div class="inserttabla">
          <table class="container" id="tabla_nuevo_movimiento">
            <thead>
              <tr>
                <th><h1>codigo</h1></th>
                <th><h1>nombre</h1></th>
                <th><h1>marca</h1></th>
                <th><h1>cantidad</h1></th>
                <th><h1>und/medida</h1></th>
                <th><h1>iva</h1></th>
                <th><h1>precio compra</h1></th>
                <th><h1>subtotal</h1></th>  
                <th><h1>total</h1></th>  
                <th><h1>reservado mas adelante</h1></th>
              </tr>
            </thead>
            <tbody id="tabla_producto_entrada">
            </tbody>
          </table>
        </div>
        <div class="datos-footer">
        <input type="button" value="guardar" class="btn tbtn" id="mbtn_1">
        <input type="reset" value="nuevo" class="btn tbtn" id="mbtn_2">
        <input type="button" value="editar" class="btn tbtn" id="mbtn_3">  
        </div>
       </form>
       <div class ='transicion-mensaje_emergente-on' id="focus_message">
          </div>
          <div class=' confirmacion box2 confirmacion_eliminar pop_eliminar'>
            <div id="titulo_alert">
              <a>Desea eliminar este producto?</a>
            </div>
            <input  type="button" value="aceptar" class="btn btn_alert elegido" id="on_aceptar">
            <input  type="button" value="cancelar" class="btn btn_alert elegido" id="on_cancelar">
            </div>
        </div>
    </div>
    </section>
    <div id="toast"></div>
    <script  src="/js/navegador.js"></script>
    <script   src="/js/ajax.js"></script>
    <script src="/js/transacciones.js"></script>
    <script src="/js/bloqueo_input.js"></script>
</body>
</html>