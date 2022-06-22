//esto es para validaciones en los input 
var validacion_correo= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
var validacion_texto = /^[a-zA-Z ]+$/;
var validacion_solonumeros = /^[0-9]+$/;
var table;
var items_formulario = ["tidentificacion","identificacion","razon-social","apellidos","direccion-tercero","telefono1","Telefono2","correo1","correo2","tipo-tercero"];      
var get_element_id_arreglo = []; 
var url;
var titulo_guardado; var guardado; var titulo_error; var error_al_guardar;
var mensaje_emergente;
var data;

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
                url: "../php/consulta_tabla_tercero.php",
                dataSrc: '',
                }, 
                columns: [
                    {data: "tipo_identificacion"},
                    {data: "identificacion"},
                    {data: "razon_social"},
                    {data: "apellido"},
                    {data: "direccion"},
                    {data: "telefono1"},
                    {data: "telefono2"},
                    {data: "correo1"},
                    {data: "correo2"},
                    {data: "idtipotercero.nombre"}, 
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
    $('.tercerocontenedor')[0].reset();
    formulario_visible();
    url = "../php/creartercero.php";
    titulo_guardado = "informacion guardada";
    guardado = "la informacion fue guardada satisfactoriamente";
    mensaje_emergente = "success";
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
                url: "../php/eliminar_tercero.php",
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
    var data = table.row( $(this).parents("tr")).data();
        get_element_id_arreglo[1].value = data.identificacion;
        get_element_id_arreglo[2].value = data.razon_social;
        get_element_id_arreglo[3].value = data.apellido;
        get_element_id_arreglo[4].value = data.direccion;
        get_element_id_arreglo[5].value = data.telefono1;
        get_element_id_arreglo[6].value = data.telefono2;
        get_element_id_arreglo[7].value = data.correo1;
        get_element_id_arreglo[8].value = data.correo2;
        get_element_id_arreglo[0].value = data.tipo_identificacion;
        get_element_id_arreglo[9].value = data.idtipotercero.nombre;
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
          };
    


});


      //este es el envio de datos al servidor para  la creacion de  los terceros

      $('#tbtn_1').click(function(e){
        
        identificacion = document.getElementById('identificacion').value;
        razon_social = document.getElementById('razon-social').value;
        apellidos = document.getElementById('apellidos').value;
        direccion = document.getElementById('direccion-tercero').value;
        telefono1 = document.getElementById('telefono1').value;
        telefono2 = document.getElementById('Telefono2').value;
        correoe1 = document.getElementById('correo1').value;
        correoe2 = document.getElementById('correo2').value;
        tipo_identificacion = document.getElementById('tidentificacion').value;
        tipo_tercero = document.getElementById('tipo-tercero').value;


        if (identificacion != "" && validacion_solonumeros.test(identificacion) ){
          if (razon_social !="" && validacion_texto.test(razon_social)){
            if (direccion !=""){
                var text = document.getElementById("tipo-tercero"),
                 element = document.getElementById("id-tipotercero"); 
               if (tipo_tercero  !="" && element.querySelector("option[value='"+text.value+"']")){
                  var text = document.getElementById("tidentificacion"),
                  element = document.getElementById("tipo_identificacion"); 
                 if (tipo_identificacion != "" && element.querySelector("option[value='"+text.value+"']")){ 
                   if(correoe1 ===""  || validacion_correo.test(correoe1)){         
                    if(correoe2 ===""  || validacion_correo.test(correoe2)){         
           $.ajax({                        
            type: "POST",                 
            url: url,                     
            data: $("#creartercero").serialize(), 
            success: function(data)            
            {
              if (data != ""){
                msnsend(data,"error al guardar",10000,"error")
               }
               else{
                msnsend("la informacion fue guardada satisfactoriamente","guardado",5000,"success")
                $('#creartercero')[0].reset();
                table.ajax.reload( null, false ); 
                     }}});

                  }else{msnsend("el campo CORREO ELECTRONICO 2 no es correcto o esta vacio","campo vacio",4000,'warning');}
                 }else{msnsend("el campo CORREO ELECTRONICO 1 no es correcto o esta vacio","campo vacio",4000,'warning');}  
                } else{msnsend("el campo TIPO DE IDENTIFICACION esta vacio","campo vacio",4000,'warning');}
               }else{msnsend("por favor escoja un TIPO TERCERO valido","campo vacio",4000,'warning');}
              }else{msnsend("el campo DIRECCION esta vacio","campo vacio",4000,'warning');}    
             }else{ msnsend("el campo RAZON SOCIAL/NONBRE esta vacio","campo vacio",4000,'warning');  }
            }else{msnsend("el campo IDENTIFICACION esta vacio","campo vacio",4000,'warning');}  
           });


           