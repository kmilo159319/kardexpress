//esto es para validaciones en los input 
var validacion_correo= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
var validacion_texto = /^[a-zA-Z ]+$/;
var validacion_solonumeros = /^[0-9]+$/;
var table;
var items_formulario = ["codigo-producto","nombre-producto","marca-producto","calculo-costeo","und-medida","centro-costos","p-iva","precio-compra","precio-venta","observaciones-producto","ref-adicional-documento"];      
var get_element_id_arreglo = []; 
var url;
var titulo_guardado; var guardado; var titulo_error; var error_al_guardar;
var mensaje_emergente;
var data;

/* esto trade todos los input en un arreglo del documento para los cambios posteriores segun la funcion que 
se cree */

for(let i in items_formulario){
   get_element_id_arreglo.push(document.getElementById(items_formulario[i]));        
}
	// DataTable inicializacion
     var listar = function (){
        table = $('#tabla').DataTable({
            "dom": 'Bfrtip',
            "paging": true,
            "autoWidth": true,
            "fixedHeader": true,
            "pageLength": 8,
            buttons: [
                'copyHtml5',
                'excelHtml5',
                'csvHtml5',
                'pdfHtml5',
                'print',
                {
                    text: '  agregar',
                    attr: {
                    class:'fas fa-plus',
                    id: 'btn-pop-up',
                    onclick:'nuevo_documento()'              
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
                url: "../php/consulta_tablaproducto.php ",
                dataSrc: '',
                }, 
                columns: [
                    {data: "idcodigoproducto"},
                    {data: "nombre_producto"},
                    {data: "marca"},
                    {data: "idcc_costeo.nombre"},
                    {data: "codigo_und.nombre"},
                    {data: "ref_adicional"},
                    {data: "idc_costos.nombre"},
                    {data: "imp_iva"},
                    {data: "precio_compra"},
                    {data: "precio_venta"}, 
                    {data: "observaciones"}, 
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

   //funcion que se ejecuta cuando se presiona boton nuevo

   function nuevo_documento(){
    $('.productocontenedor')[0].reset();
    formulario_visible();
    url = "../php/crearproducto.php";
    titulo_guardado = "informacion guardada";
    guardado = "la informacion fue guardada satisfactoriamente";
    mensaje_emergente = "success";
   }


// esto es para eliminar algun dato desde la tabla de contenido

var obtener_data_eliminar = function(tbody,table){
    $(tbody).on("click","button.eliminar",function(){
        data = table.row( $(this).parents("tr")).data()
        msn_eliminar_visible();
        $("#focus_message").attr("class","transicion-mensaje_emergente-off");
    });
}

//esto es para confirmar si se desea eliminar el producto o no
$(".confirmacion").find('.elegido').click(function(){
    if($(this).val() === 'aceptar'){ 
            $.ajax({
                type: "post", 
                url: "../php/eliminar_producto.php",
                data: {data},
                success: function (data) {               
                    if (data != "")
                    {
                     msnsend("no se puede borrar este producto porque hay documentos ligados a este",data,10000,"error");
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
  })   



//esto es para editar cualquier campo de la tabla

var obtener_data_editar = function(tbody,table){
    $(tbody).on("click","button.editar",function(){
    var data = table.row( $(this).parents("tr")).data();
        get_element_id_arreglo[0].value = data.idcodigoproducto;
        get_element_id_arreglo[1].value = data.nombre_producto;
        get_element_id_arreglo[2].value = data.marca;
        get_element_id_arreglo[3].value = data.idcc_costeo.nombre;
        get_element_id_arreglo[4].value = data.codigo_und.nombre;
        get_element_id_arreglo[5].value = data.idc_costos.nombre;
        get_element_id_arreglo[6].value = data.imp_iva;
        get_element_id_arreglo[7].value = data.precio_compra;
        get_element_id_arreglo[8].value = data.precio_venta;
        get_element_id_arreglo[9].value = data.observaciones;
        get_element_id_arreglo[10].value = data.ref_adicional;
        formulario_visible();
        url = "../php/editar_producto.php";
        titulo_guardado = "informacion guardada";
        guardado = "el archivo ha sido editado";
        mensaje_emergente = "info";
    })
}


 

$(document).ready(function() {

    // inicializa la tabla de contenido
     listar();

    // esto es para bloquear el envio del formulario con enter
    $("#und_medida").keypress(function(e) {
        if (e.which == 13) {
            return false;
            
        }
    });




        //ejecuta la tabla cuando se carga un formulario
             
        window.onload = function() {
            //funciones a ejecutar
           datalist('post','../php/consulta_tabladatosund.php','#datalistund');
           datalist('post','../php/consulta_calculo_costeo.php','#calculocosteo');
           datalist('post','../php/consulta_tabladatoscc.php','#dataliscc')
          };
    


});


      //este es el envio de datos al servidor para  crear o editar de  los productos

      $('#pbtn_1').click(function(e){        
        
        codigo_producto = document.getElementById('codigo-producto').value;
        nombre_producto = document.getElementById('nombre-producto').value;
        calculo_costeo = document.getElementById('calculo-costeo').value;
        unidad_medida = document.getElementById('und-medida').value;
        centro_costos = document.getElementById('centro-costos').value;
        porcentaje_iva = document.getElementById('p-iva').value;
        


        if (codigo_producto != "" && validacion_solonumeros.test(codigo_producto) ){
          if (nombre_producto !=""){
                var text = document.getElementById("calculo-costeo"),
                element = document.getElementById("calculocosteo");
             if (calculo_costeo !="" &&  element.querySelector("option[value='"+text.value+"']")){
                   var text = document.getElementById("und-medida"),
                   element = document.getElementById("datalistund");
               if (unidad_medida !="" && element.querySelector("option[value='"+text.value+"']")){
                     var text = document.getElementById("centro-costos"),
                     element = document.getElementById("dataliscc"); 
                 if (centro_costos != "" && element.querySelector("option[value='"+text.value+"']")){
                   if (porcentaje_iva != "" && validacion_solonumeros.test(porcentaje_iva)){
                            
           $.ajax({                       
            type: "POST",                 
            url: url,                     
            data: $("#crearproducto").serialize(), 
            success: function(data)            
            {
             if (data!= ""){
            msnsend(data,titulo_error,10000,'error');
             }
             else{
            msnsend(guardado,titulo_guardado,5000,mensaje_emergente);
              $('.productocontenedor')[0].reset();
              table.ajax.reload( null, false );
                   }}});
                  }else{msnsend("el campo DE PORCENTAJE IVA esta vacio","campo vacio",4000,'warning');}
                } else{msnsend("el campo CENTRO DE COSTOS esta vacio","campo vacio",4000,'warning');}
               }else{msnsend("el campo UNIDAD DE MEDIDA esta vacio","campo vacio",4000,'warning');}
              }else{msnsend("el campo CALCULO DE COSTEO esta vacio","campo vacio",4000,'warning');}    
             }else{ msnsend("el campo NOMBRE DEL PRODUCTO esta vacio","campo vacio",4000,'warning');  }
            }else{msnsend("el campo CODIGO DEL PRODUCTO esta vacio","campo vacio",4000,'warning');}  
           });
  
    