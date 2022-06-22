//esto es para validaciones en los input 
var validacion_correo= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
var validacion_texto = /^[a-zA-Z ]+$/;
var validacion_solonumeros = /^[0-9]+$/;
var table;
var items_formulario = ["doc_numero","doc_ref","doc_tipo_dentificacion","numero_identificacion","doc_razon_social","doc_apellidos","doc_direccion","doc_telefono","doc_correo",
                        "doc_telefono2","doc_obseervaciones","doc_fecha"];      
var get_element_id_arreglo = []; 
var url;
var titulo_guardado; var guardado; var titulo_error; var error_al_guardar;
var mensaje_emergente;
var data;
//esto es para agregar productos al formulario
var productos_de_formulario = [];
var acomulador_codigoproducto = [];
var acomulador_nombreproducto = [];
var acomulador_marca = [];
var acomulador_cantidad = [];
var acomulador_und_medida = [];
var acomulador_iva = [];
var acomulador_precio = [];
var entrada_o_salida = 0;
var numero_documento;
var acomulador_productos_removidos = [];


/* esto trae todos los input en un arreglo del documento para los cambios en los datos del tercero posteriores segun la funcion que 
se cree */

for(let i in items_formulario){
    get_element_id_arreglo.push(document.getElementById(items_formulario[i]));        
 };


 	// DataTable inicializacion
     var listar = function (){
        table = $('#tabla').DataTable({
            "dom": 'Bfrtip',
            "paging": true,
            "autoWidth": true,
            "fixedHeader": true,
            "pageLength": 7,
            buttons: [
                'copyHtml5',
                'excelHtml5',
                'csvHtml5',
                'pdfHtml5',
                'print',
                {
                    text: ' entrada',
                    attr: {
                    class:'fas fa-plus',
                    id: 'btn-pop-up',
                    onclick:'nueva_entrada()'              
                    },
                    
                },
                {
                    text: ' salida',
                    attr: {
                    class:'fas fa-plus',
                    id: 'btn-pop-up',
                    onclick:'nueva_salida()'              
                    },
                    
                }                
            ],
            "language": {
                "search": "buscar:",
                "paginate": {
                    "previous":"atras",
                    "next":"siguiente",
                },
                "info":"Mostrando _START_ a _END_ de _TOTAL_ registros",
                "infoEmpty": "",
                "zeroRecords":"No se encontraron coincidencias",
                "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                "emptyTable": "No hay información",
              },
              ajax: {
                url: "../php/consultatransaccion.php",
                dataSrc: '',
                }, 
                columns: [
                    {data: "numero_documento"},
                    {data: "fecha"},
                    {data: "identificacion"},
                    {data: "razon_social"},
                    {data: "apellido"},
                    {data: "docref"},
                    {data: "observaciones"},
                    {data: "iva"},
                    {data: "precio_total"},
                    {data: "descripcion"}, 
                    {
                        "data": null,
                        "className": "button",
                        "defaultContent": "<button type='button' class='editar btn btn-primary' id='btn-pop-up_table' ><i class='fa fa-pencil-square-o'></i></button><button type='button' class='eliminar btn btn-danger'  id='btn-pop-up_table' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>"
                    },        
                ], 
             }); 
             obtener_data_eliminar("#tabla tbody",table) ; 
             obtener_data_editar("#tabla tbody",table) ; 
     }

  //esto es para generar el formulario de salidas
     function nueva_salida(){
        formulario_visible();
        url = "../php/crearentrada.php";
        titulo_guardado = "informacion guardada";
        guardado = "la informacion fue guardada satisfactoriamente";
        mensaje_emergente = "success";
        entrada_o_salida = 2;
        var doc_ref = document.getElementById('doc_ref');
        doc_ref.disabled = true; doc_ref.className = 'doc_entrada';
        var doc_titulo_t = document.getElementById('titulo_transaccion');
        doc_titulo_t.innerHTML = 'registrar salida';
        var doc_titulo_t = document.getElementById('titulo_precio');
        doc_titulo_t.innerHTML = 'precio venta x und:';
        var reset = document.querySelector("#tabla_producto_entrada");
        reset.innerHTML = "";
        $('#creartransaccion1')[0].reset();
        acomulador_codigoproducto = [];
        acomulador_nombreproducto = [];
        acomulador_marca = [];
        acomulador_cantidad = [];
        acomulador_und_medida = [];
        acomulador_iva = [];
        acomulador_precio = [];
       };


  //esto es para generar el formulario de entradas
  function nueva_entrada(){
    formulario_visible();
    url = "../php/crearentrada.php";
    titulo_guardado = "informacion guardada";
    guardado = "la informacion fue guardada satisfactoriamente";
    mensaje_emergente = "success";
    entrada_o_salida = 1;
    var doc_ref = document.getElementById('doc_ref');
    doc_ref.disabled = false; doc_ref.className = '';
    var doc_titulo_t = document.getElementById('titulo_transaccion');
    doc_titulo_t.innerHTML = 'registrar entrada';
    var doc_titulo_t = document.getElementById('titulo_precio');
    doc_titulo_t.innerHTML = 'precio compra x und:';
    var reset = document.querySelector("#tabla_producto_entrada");
    reset.innerHTML = "";
    $('#creartransaccion1')[0].reset();
    acomulador_codigoproducto = [];
    acomulador_nombreproducto = [];
    acomulador_marca = [];
    acomulador_cantidad = [];
    acomulador_und_medida = [];
    acomulador_iva = [];
    acomulador_precio = [];
   };       


 // esto es para eliminar algun dato desde la tabla de contenido

var obtener_data_eliminar = function(tbody,table){
    $(tbody).on("click","button.eliminar",function(){
        data = table.row( $(this).parents("tr")).data()
        msn_eliminar_visible();
        $("#focus_message").attr("class","transicion-mensaje_emergente-off");
    });
};


//esto es para confirmar si se desea eliminar el producto o no
$(".confirmacion").find('.elegido').click(function(){
    if($(this).val() === 'aceptar'){ 
            $.ajax({
                type: "post", 
                url: "../php/eliminar_transaccion.php",
                data: {data},
                success: function (data) {               
                    if (data != "")
                    {
                     msnsend("no se puede borrar este tercero porque hay documentos ligados a este",data,10000,"error");
                     $("#focus_message").attr("class","transicion-mensaje_emergente-on");
                    }else{
                     msnsend("la informacion fue borrada satisfactoriamente","borrado",5000,"info");
                          }  
                          table.ajax.reload( null, false ); 
                          $(".pop_eliminar").fadeOut(300);
                          $("#focus_message").attr("class","transicion-mensaje_emergente-on");
                }
            });
    }
    else if($(this).val() == 'cancelar'){
        $(".pop_eliminar").fadeOut(300);
        $("#focus_message").attr("class","transicion-mensaje_emergente-on");
    }
  });  


//esto es para traer el formulario con los datos para editar



var obtener_data_editar = function(tbody,table){
    $(tbody).on("click","button.editar",function(){
    var data_result = table.row( $(this).parents("tr")).data();
    var searchdata = data_result.numero_documento;
    var insert_data = document.querySelector("#tabla_producto_entrada");
    $.ajax({
      type: "post",
      url: "../php/consultaeditar_transaccion.php",
      data: {searchdata},
      dataType: "json",
      success: function (data) {
        get_element_id_arreglo[0].value = data[0].numero_documento;
        get_element_id_arreglo[1].value = data[0].docref;
        get_element_id_arreglo[2].value = data[0].tipo_identificacion;
        get_element_id_arreglo[3].value = data[0].identificacion;
        get_element_id_arreglo[4].value = data[0].razon_social;
        get_element_id_arreglo[5].value = data[0].apellido;
        get_element_id_arreglo[6].value = data[0].direccion;
        get_element_id_arreglo[7].value = data[0].telefono1;
        get_element_id_arreglo[8].value = data[0].correo1;
        get_element_id_arreglo[9].value = data[0].telefono2;
        get_element_id_arreglo[10].value = data[0].observaciones;
        get_element_id_arreglo[11].value = data[0].fecha;
        numero_documento = get_element_id_arreglo[0].value;
        console.log(numero_documento);
      }
    });
    $.ajax({
      type: "post",
      url: "../php/consultareditar_transaccion_productos.php",
      data: {searchdata},
      dataType: "json",
      success: function (data) {
       for(let items of data){
        insert_data.innerHTML += 
        `
        <tr>  
              <td><a name=''>${items.idcodigoproducto}</a></td>
              <td> <a name=''>${items.nombre_producto}</a></td>
              <td> <a name=''>${items.marca}</a></td>
              <td> <a name=''>${items.cantidad}</a></td>
              <td> <a name=''>${items.nombre}</a></td>
              <td> <a name=''>${items.iva}</a></td>
              <td> <a name=''>${items.preciound}</a></td>
              <td> <a name=''>pendiente</a></td>   
              <td>pendiente</td>          
              <td>
              <input type="button" value="editar" class="eliminar btn tbtn" id="eliminar_dato">
              </td>
        </tr>
              `
            }
      }
    });

        formulario_visible();
        url = "../php/editar_tercero.php";
        titulo_guardado = "informacion guardada";
        guardado = "el archivo ha sido editado";
        mensaje_emergente = "info";
    })
}



$(document).ready(function() {

    // inicializa la tabla de contenido
     listar();

    // esto es para bloquear el envio del formulario con enter
    $("#creartercero").keypress(function(e) {
        if (e.which == 13) {
            return false;
            
        }
    });


     //ejecuta los datalist cuando se carga un formulario
             
        window.onload = function() {
            //funciones a ejecutar
           datalist('post','../php/consulta_tabladatosund.php','#datalistund');
           datalist('post','../php/consulta_calculo_costeo.php','#calculocosteo');
           datalist('post','../php/consulta_tabladatoscc.php','#dataliscc')
           datalist('post','../php/consulta_tipo_tercero.php','#id-tipotercero')
           datalist('post','../php/consultatercero.php','#doc-razon-social')
           datalist('post','../php/consultaproducto.php','#doc-nombre-producto')
           identificacion_tercero2('post','../php/consultatercero.php','#doc-numero-identificacion')
           codigo_producto2('post','../php/consultaproducto.php','#doc-numero-producto')
          };
    


});





 //este evento es para el autocompletado del formulario al escribir un dato en el tercero



 $('.dato-digitado').change(function (e) { 
    e.preventDefault();

    const hoy = new Date();
    
    $('#doc_fecha').value = hoy;
    

   numero_cedula = document.getElementById('numero_identificacion').value;
   doc_razon_social = document.getElementById('doc_razon_social').value;
    $.ajax({
      type: "post",
      url: "/php/autocompletarform_entrada.php",
      data: {numero_cedula,doc_razon_social}, 
      success: function (data) 
      {
          var dataentradas = JSON.parse(data);
          rentradas =dataentradas[0];
          doce1 = document.getElementById('numero_identificacion');
          doce1.value = rentradas.identificacion;
          doce2 = document.getElementById('doc_razon_social');
          doce2.value = rentradas.razon_social;
          doce3 = document.getElementById('doc_apellidos');
          doce3.value = rentradas.apellido;
          doce4 = document.getElementById('doc_direccion');
          doce4.value = rentradas.direccion;
          doce5 = document.getElementById('doc_telefono');
          doce5.value = rentradas.telefono1;
          doce6 = document.getElementById('doc_correo');
          doce6.value = rentradas.correo1;
          doce7 = document.getElementById('doc_telefono2');
          doce7.value = rentradas.telefono2;    
          doce8 = document.getElementById('doc_tipo_dentificacion');
          doce8.value = rentradas.tipo_identificacion;  
      } 
    });
   });


 //este evento es para el autocompletado del formulario al escribir un dato en el producto

         $('.dato-prod-digitado').change(function (e) { 
           url = '../php/autocompletarform_producto.php';
            e.preventDefault();
            doc_numero_producto = document.getElementById('doc_numero_producto').value;
            doc_nombre_producto = document.getElementById('doc_nombre_producto').value;
            $.ajax({
              type: "post",
              url: url,
              data: {doc_numero_producto,doc_nombre_producto},
              success: function (data) 
              {
                  var datapentradas = JSON.parse(data);
                  pentradas =datapentradas[0];
                  docp1 = document.getElementById('doc_numero_producto');
                  docp1.value = pentradas.idcodigoproducto;
                  docp2 = document.getElementById('doc_nombre_producto');
                  docp2.value = pentradas.nombre_producto;
                  docp3 = document.getElementById('doc_marca');
                  docp3.value = pentradas.marca;
                  docp4 = document.getElementById('doc_und_medida');
                  docp4.value = pentradas.nombre;
                  docp5 = document.getElementById('doc_iva');
                  docp5 .value = pentradas.imp_iva;
  
              }
            });
           });

// esto es para insertar el producto en la tabla que esta en el formulario

        $('.apbtn').click(function (e) { 
          e.preventDefault();

          docp1 = document.getElementById('doc_numero_producto');
          docp2 = document.getElementById('doc_nombre_producto');
          docp3 = document.getElementById('doc_marca');
          docp4 = document.getElementById('doc_cantidad');
          docp5 = document.getElementById('doc_und_medida');
          docp6 = document.getElementById('doc_iva');
          docp7 = document.getElementById('doc_precio_compra');
          docp8 = docp4.value * docp7.value;
          if (docp1.value != ''){
            if (docp2.value != ""){
              if (docp4.value != "" && validacion_solonumeros.test(docp4.value) ){
                if (docp5.value != ""){
                  if (docp6.value != "" && validacion_solonumeros.test(docp6.value) ){
                    if (docp7.value != "" && validacion_solonumeros.test(docp7.value) ){

          id_codigo = $('#doc_numero_producto').val()+$('#doc_nombre_producto').val();
          productos_de_formulario.push(id_codigo);
          productos_de_formulario[id_codigo] = [];
          var cambio = [];  
          cambio.push(id_codigo);
          cambio[id_codigo] = [];   
          var insert_data = document.querySelector("#tabla_producto_entrada");
          insert_data.innerHTML += 
            `
      <tr>
            <td><a name='${productos_de_formulario[id_codigo].push(docp1.value)}'>${docp1.value}</a></td>
            <td <a name='${productos_de_formulario[id_codigo].push(docp2.value)}'>${docp2.value}</a></td>
            <td <a name='${productos_de_formulario[id_codigo].push(docp3.value)}'>${docp3.value}</a></td>
            <td <a name='${productos_de_formulario[id_codigo].push(docp4.value)}'>${docp4.value}</a></td>
            <td <a name='${productos_de_formulario[id_codigo].push(docp5.value)}'>${docp5.value}</a></td>
            <td <a name='${productos_de_formulario[id_codigo].push(docp6.value)}'>${docp6.value}</a></td>
            <td <a name='${productos_de_formulario[id_codigo].push(docp7.value)}'>${docp7.value}</a></td>
            <td <a name=''>${docp8}</a></td>   
            <td <a name=''>${docp8}</a></td>          
            <td>reservado para mas adelante</td>
      </tr>
            `
            cambio[id_codigo].push(JSON.stringify(productos_de_formulario[id_codigo]));
            docp1.value = "";
            docp2.value = "";
            docp3.value = "";
            docp4.value = "";
            docp5.value = "";
            docp6.value = "";
            docp7.value = ""; 

            console.log(cambio);

               }else{msnsend("el campo PRECIO POR UNIDAD no es correcto o esta vacio","campo vacio",4000,'warning');}
              }else{msnsend("el campo IVA no es correcto o esta vacio","campo vacio",4000,'warning');}
             }else{msnsend("el campo UND/MEDIDA no es correcto o esta vacio","campo vacio",4000,'warning');}
            }else{msnsend("el campo CANTIDAD no es correcto o esta vacio","campo vacio",4000,'warning');}
           }else{msnsend("el campo NOMBRE DEL PRODUCTO no es correcto o esta vacio","campo vacio",4000,'warning');}
          }else{msnsend("el campo NUMERO DE PRODUCTO no es correcto o esta vacio","campo vacio",4000,'warning');}
         });


         //esto es para el envio de datos a php 

         const registrar_movimiento = (tipo_doc) => (function () { 
          url = '../php/crearentrada.php';
           tipo_doc = entrada_o_salida;
          doce1 = document.getElementById('numero_identificacion').value;
          doce2 = document.getElementById('doc_razon_social').value;
          doce3 = document.getElementById('doc_apellidos').value;
          doce4 = document.getElementById('doc_direccion').value;
          doce5 = document.getElementById('doc_telefono').value;
          doce6 = document.getElementById('doc_correo').value;
          doce7 = document.getElementById('doc_telefono2').value;
          doce8 = document.getElementById('doc_tipo_dentificacion').value;
          doce9 = document.getElementById('doc_obseervaciones').value;
          doce10 = document.getElementById('doc_fecha').value; 
          doce11 = document.getElementById('doc_numero').value;
          doce12 = (document.getElementById('doc_ref').value);
          doce13 = tipo_doc;
              if (doce11 != "" && validacion_solonumeros.test(doce11) ){
                if (doce10 != ""){ 
                  if (doce8 != ""){
                    if (doce1 != "" && validacion_solonumeros.test(doce1)){
                      if (doce2 != "" && validacion_texto.test(doce2)){
                        if (doce4 != ""){
                          if (productos_de_formulario != ""){
                          $.ajax({
                            type: "post",
                            url: url,
                            data: {'array': JSON.stringify(productos_de_formulario)},
                            success: function (data) 
                            {           
              if (data != "")
               {
                msnsend(data,"error al guardar",10000,"error")
               }else{
                msnsend("la informacion fue guardada satisfactoriamente","guardado",5000,"success")
                var reset = document.querySelector("#tabla_producto_entrada");
                reset.innerHTML = "";
                $('#creartransaccion1')[0].reset();
                productos_de_formulario = [];
                table.ajax.reload( null, false );
                     }
                    }
                  })
                   }else{msnsend("no hay productos agregados a este documento","campo vacio",4000,'warning');}
                  }else{msnsend("el campo DIRECCION no es correcto o esta vacio","campo vacio",4000,'warning');}
                 }else{msnsend("el campo RAZON SOCIAL/NOMBRE no es correcto o esta vacio","campo vacio",4000,'warning');}
                }else{msnsend("el campo NUMERO DE IDENTIFICACION no es correcto o esta vacio","campo vacio",4000,'warning');}
               }else{msnsend("el campo TIPO DE IDENTIFICACION no es correcto o esta vacio","campo vacio",4000,'warning');}
              }else{msnsend("el campo FECHA no es correcto o esta vacio","campo vacio",4000,'warning');}
             }else{msnsend("el campo No DE DOCUMENTO no es correcto o esta vacio","campo vacio",4000,'warning');}

         });


         //esto es para limpiar el formulario con el boton para ingresar nueva informacion
         $('#mbtn_2').click(function (e) { 
            e.preventDefault();
            var reset = document.querySelector("#tabla_producto_entrada");
            reset.innerHTML = ""; 
            $('#creartransaccion1')[0].reset();      
          });


             /* esto es para enviar el formulario, la variable "entrada_o_salida" 
          controla si el estado "1 = entradas" o "2 = salidas" en la base de datos */   
          $('#mbtn_1').click(registrar_movimiento (entrada_o_salida));   


          // esto es para remover productos ingresados al documento antes de guardar el documento

          $("#tabla_producto_entrada").on('click','#eliminar_dato',function() {


            // Obtenemos todos los valores contenidos en los <td> de la fila
            // seleccionada
            $(this).parents("tr").find("a:first").each(function() {
              acomulador_productos_removidos.push($(this).html());
            });
            console.log(acomulador_productos_removidos);
          });