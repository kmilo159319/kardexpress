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
    <link rel="stylesheet" href="/css/creartercero.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/css/error_message.css">
    <script src="https://kit.fontawesome.com/06948a739e.js" crossorigin="anonymous"></script>
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <title>crar tercero</title>
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
      <div class="box2  table_tercero">
       <div class="titulo-table_tercero"> 
           <h2>terceros creados</h2>
           <div  id="btn-pop-up"> <p class="fas fa-plus"> agregar</p></div>
          </div>
           <div class="titulotable">
           <table class="theader">
            <thead>
              <tr>
                <th id="titulotipo"><h1>tipo</h1></th>
                <th id="tituloidentificacion"><h1>identificacion</h1></th>
                <th id="titulorazonsocial"><h1>razon social/nombre</h1></th>
                <th id="tituloapellido"><h1>apellidos</h1></th>
                <th id="titulodireccion"><h1>direccion</h1></th>
                <th id="titulotelefono1"><h1>telefono1</h1></th>
                <th id="titulotelefono2"><h1>telefono2</h1></th>
                <th id="titulocorreo"><h1>correo 1</h1></th>
                <th id="titulocorreo"><h1>correo 2</h1></th>
                <th id="titulotipotercero"><h1>tipo de tercero</h1></th>
                <th id="tituloobservacion"><h1 >reservado para mas adelante</h1></th>
              </tr>
            </thead>
          </table>
        </div>

       <div class="contenido-table_tercero">
        <table class="container">
            <thead>
              <tr>
                <th><h1>tipo</h1></th>
                <th><h1>identificacion</h1></th>
                <th><h1>razon social/nombre</h1></th>
                <th><h1>apellidos</h1></th>
                <th><h1>direccion</h1></th>
                <th><h1>telefono1</h1></th>
                <th><h1>telefono2</h1></th>
                <th><h1>correo 1</h1></th>
                <th><h1>correo 2</h1></th>
                <th><h1>tipo de tercero</h1></th>
                <th><h1>reservado para mas adelante</h1></th>
              </tr>
           </thead>
          <tbody id="tablacontenidotercero">
          </tbody>
        </table>
      </div>
      </div>
      <form id="creartercero" action="#" class="box2 tercerocontenedor pop" method="post">
        <div class="datos-head">
          <span class="span">✖</span>
          <div class="img-tercero">
          </div>
          <p class="titulotercero">Tercero</p>
        </div>
        <div class="datos-insert">
       <li id="t1"><label for="">Tipo:</label>
       <input id="tidentificacion" list="tipo_identificacion" name="tipo_identificacion" class="input-orange"  placeholder="(ejem)NIT,CC,CE.OTRO">
       <datalist id="tipo_identificacion">
       <option value="nit"></option>
       <option value="cc"></option>
       <option value="ce"></option>
       <option value="otro"></option>
      </datalist></li>
       <li id="t2"><label for="">Identificacion:</label><br><input id="identificacion" type="text" class="input-requered"  required="" pattern="[0-9]+" name="identificacion" placeholder="numero de documento" ></li>
       <li id="t3"><label for="">Razon social / nombre:</label><br><input id="razon-social" type="text" class="input-requered" name="razon_social" placeholder="(ejem) distribuidora sa"></li>
       <li id="t4"><label for="">Apellidos:</label><br><input id="apellidos" type="text" name="apellido" ></li>
       <li id="t5"><label for="">Direccion:</label><br><input id="direccion-tercero" type="text" class="input-requered"  name="direccion"></li>
       <li id="t6"><label for="">Telefono1:</label><br><input id="telefono1" type="text"  name="telefono_1"></li>
       <li id="t7"><label for="">Telefono2:</label><br><input id="Telefono2" type="text"   name="telefono2"></li>
       <li id="t8"><label for="">Correo electronico 1:</label><br><input id="correo1" type="email" placeholder="(ejem)correo@email.com" name="correo1"></li>
       <li id="t9"><label for="">Correo electronico 2:</label><br><input id="correo2" type="email" placeholder="(ejem)correo@email.com" name="correo2"></li>
        <li id="t10"><label for="">Tipo de tercero:</label>
        <input id="tipo-tercero" list="id-tipotercero" name="idtipotercero" class="input-orange"  placeholder="(ejem)despliege la lista">
        <datalist id="id-tipotercero"></datalist></li>
        </div>
        <div class="datos-footer">
        <input type="button" value="guardar" class="btn tbtn" id="tbtn_1">
        <input type="reset" value="nuevo" class="btn tbtn">
        <input type="button" value="editar" class="btn tbtn" id="tbtn_3">  
        </div>
       </form>
    </div>
    </section>
    <div id="toast"></div>
    <script  src="/js/navegador.js"></script>
    <script   src="/js/ajax.js"></script>
    <script src="/js/bloqueo_input.js"></script>
</body>
</html>