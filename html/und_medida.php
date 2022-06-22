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
    <link rel="stylesheet" href="/css/unidadmedida.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/css/error_message.css">
    <script src="https://kit.fontawesome.com/06948a739e.js" crossorigin="anonymous"></script>
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    
    <title>unidad de medida</title>
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
            <div id="informacion" action="#" method="post" class="box2">
                <div class="tconsulta" id="item1_">
                    <h2 id="titulotablaund">unidades de medida agregados</h2>
                </div>  
                <dinov class="consulta" >
                    <table class="container">
                      <thead>
                        <tr>
                          <th><h1>codigo</h1></th>
                          <th><h1>descripcion</h1></th>
                        </tr>
                      </thead>
                      <tbody id="tablacontenidound">
                      </tbody>
                    </table>
                  </dinov> 
                </div>
            <form id="und_medida" action="#" method="post" class="box2 tamaño">
                <div class="warp tamaño2">
                <li id="nombre_und"><label for="nombre_und" >nombre de la unidad de medida</label><br><br>
                <input type="text" class="text"  name="nombre_und" placeholder="und,kilo,metro,etc" id="um_1"><div id="demo2"></div></li>
                </div> 
                <button type="reset"  class="btn undbtn1" id="btn_und">crear</button>
                </form>
        </div>
    </section>
    <div id="toast"></div>
    <script  src="/js/navegador.js"></script>
    <script   src="/js/ajax.js"></script>
</body>
</html>