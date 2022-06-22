//esto es para validaciones en los input 
var validacion_correo= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
var validacion_texto = /^[a-zA-Z ]+$/;
var validacion_solonumeros = /^[0-9]+$/;
var titulo_guardado; var guardado; var titulo_error; var error_al_guardar;
var mensaje_emergente;
var data;


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
                  
                url: '../php/consulta_tabladatoscc.php',
                dataSrc: '',
                }, 
                columns: [
                    {data: "idc_costos"},
                    {data: "nombre"},
                    {
                        "data": null,
                        "className": "button",
                        "defaultContent": "</button><button type='button' class='eliminar btn btn-danger'  id='btn-pop-up_table' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>"
                    },        
                ], 
             }); 
             obtener_data_eliminar("#tabla tbody",table) ; 
     }


// esto es para eliminar algun dato desde la tabla de contenido

var obtener_data_eliminar = function(tbody,table){
    $(tbody).on("click","button.eliminar",function(){
        data = table.row( $(this).parents("tr")).data()
        msn_eliminar_visible();
        $("#focus_message").attr("class","transicion-mensaje_emergente-off");
    });
}


//esto es para confirmar si se desea eliminar el centro de costo o no
$(".confirmacion").find('.elegido').click(function(){
    if($(this).val() === 'aceptar'){ 
            $.ajax({
                type: "post", 
                url: "../php/eliminar_centro_costos.php",
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


  //este es el envio de datos al servidor para centro de costos
  $('#btn-c_costos').click(function(e){
    var url = "../php/centro_de_costos.php";
    nombre_cc =document.getElementById('cc_1').value;
    if (nombre_cc ===""){   
      msnsend("el campo nombre del centro de costos no debe esta vacio","campo vacio",4000,'warning');
      return false
    }else{
       $.ajax({                        
        type: "POST",                 
        url: url,                     
        data: $("#formulario").serialize(), 
        success: function(data)             
        {
         if (data!= ""){
          msnsend(data,"error al guardar",10000,"error")
         }
         else{
          msnsend("la informacion fue guardada satisfactoriamente","guardado",5000,"success");
          $('#formulario')[0].reset();
          table.ajax.reload( null, false );
         }
        }
       });
      }

    });


  


  $(document).ready(function() {

    // inicializa la tabla de contenido
     listar();

    // esto es para bloquear el envio del formulario con enter
    $("#btn_und").keypress(function(e) {
        if (e.which == 13) {
            return false;
            
        }
    });
});  