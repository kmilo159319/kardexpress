//esto es para validaciones en los input 
var validacion_correo= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
var validacion_texto = /^[a-zA-Z ]+$/;
var validacion_solonumeros = /^[0-9]+$/;

//esto es para los mensajes de error y guardado emergentes
const toast = ({ 
  title = "",
  message = "",
  type = "info",
  duration = 3000 
}) => {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    const icons = {
      success: 'fas fa-check-circle',
      info: 'fas fa-info-circle',
      warning: 'fas fa-exclamation-circle',
      error: 'fas fa-exclamation-circle',
    };

    // esto es para la animacion de los mensajes
    const autoRemove = setTimeout(()=> {
      main.removeChild(toast);
    }, duration + 1000)

    toast.onclick = (e) => {
      if(e.target.closest('.toast__close')){
        main.removeChild(toast);
        clearTimeout(autoRemove);
      }
    };

    const  icon = icons[type];
    const delay = (duration/1000).toFixed(2);

    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `slideLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`

    toast.innerHTML = `
      <div class="toast__icon">
          <i class="${icon}"></i>
      </div>
      <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <p class="toast__msg">${message}</p>
      </div>
      <div class="toast__close">
          <i class="fas fa-times"></i>
      </div>
    `;
    main.appendChild(toast);
  }
};

// estas son constantes de validaciones de error emergentes


var msnsend = (message,tittle1,tiempo1,typesend) => {
  toast({
    title : tittle1,
    message : message,
    type : typesend,
    duration : tiempo1,
  });   
}




$(document).on('ready',function() {


  $("#und_medida").keypress(function(e) {
    if (e.which == 13) {
        return false;
        
    }
});

 $("#formulario").keypress(function(e) {
  if (e.which == 13) {
      return false;
      
  }
});

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
          msnsend("la informacion fue guardada satisfactoriamente","guardado",5000,"success")
          tablacontenido_cc ();
         }
        }
       });
      }

    });
    

    //este es el envio de datos al servidor para unidad de medida
    $('#btn_und').click(function(e){
      var url = "../php/unidadmedida.php";
      nombre_und_medida= document.getElementById('um_1').value;
      if (nombre_und_medida===""){
        msnsend("el campo nombre de la unidad de medida no debe esta vacio","campo vacio",4000,'warning');
        return false
      }else{
         $.ajax({                        
          type: "POST",                 
          url: url,                     
          data: $("#und_medida").serialize(), 
          success: function(data)             
          {
           if (data!= ""){
            msnsend(data,"error al guardar",10000,"error")
           }
           else{
            msnsend("la informacion fue guardada satisfactoriamente","guardado",5000,"success")
            tablacontenido_und();
           }
          }
         });
      }
      });

      //este es el envio de datos al servidor para  la creacion de  los productos

      $('#pbtn_1').click(function(e){
        
        var url = "../php/crearproducto.php";
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
              msnsend(data,"error al guardar",10000,"error")
             }
             else{
              msnsend("la informacion fue guardada satisfactoriamente","guardado",5000,"success")
              tablacontenido_producto();
                   }}});
                  }else{msnsend("el campo DE PORCENTAJE IVA esta vacio","campo vacio",4000,'warning');}
                } else{msnsend("el campo CENTRO DE COSTOS esta vacio","campo vacio",4000,'warning');}
               }else{msnsend("el campo UNIDAD DE MEDIDA esta vacio","campo vacio",4000,'warning');}
              }else{msnsend("el campo CALCULO DE COSTEO esta vacio","campo vacio",4000,'warning');}    
             }else{ msnsend("el campo NOMBRE DEL PRODUCTO esta vacio","campo vacio",4000,'warning');  }
            }else{msnsend("el campo CODIGO DEL PRODUCTO esta vacio","campo vacio",4000,'warning');}  
           });



      //este es el envio de datos al servidor para unidad la creacion de  los terceros

      $('#tbtn_1').click(function(e){
        
        var url = "../php/creartercero.php";
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
                tablacontenido_tercero();
                     }}});

                  }else{msnsend("el campo CORREO ELECTRONICO 2 no es correcto o esta vacio","campo vacio",4000,'warning');}
                 }else{msnsend("el campo CORREO ELECTRONICO 1 no es correcto o esta vacio","campo vacio",4000,'warning');}  
                } else{msnsend("el campo TIPO DE IDENTIFICACION esta vacio","campo vacio",4000,'warning');}
               }else{msnsend("por favor escoja un TIPO TERCERO valido","campo vacio",4000,'warning');}
              }else{msnsend("el campo DIRECCION esta vacio","campo vacio",4000,'warning');}    
             }else{ msnsend("el campo RAZON SOCIAL/NONBRE esta vacio","campo vacio",4000,'warning');  }
            }else{msnsend("el campo IDENTIFICACION esta vacio","campo vacio",4000,'warning');}  
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
          e.preventDefault();
          doc_numero_producto = document.getElementById('doc_numero_producto').value;
          doc_nombre_producto = document.getElementById('doc_nombre_producto').value;
          $.ajax({
            type: "post",
            url: "/php/autocompletarform_producto.php",
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

        //esto es para agregar productos al formulario

        var acomulador_codigoproducto = [];
        var acomulador_nombreproducto = [];
        var acomulador_marca = [];
        var acomulador_cantidad = [];
        var acomulador_und_medida = [];
        var acomulador_iva = [];
        var acomulador_precio = [];

        $('#apbtn').click(function (e) { 
          e.preventDefault();

          docp1 = document.getElementById('doc_numero_producto');
          docp2 = document.getElementById('doc_nombre_producto');
          docp3 = document.getElementById('doc_marca');
          docp4 = document.getElementById('doc_cantidad');
          docp5 = document.getElementById('doc_und_medida');
          docp6 = document.getElementById('doc_iva');
          docp7 = document.getElementById('doc_precio_compra');

          if (docp1.value != ''){
            if (docp2.value != ""){
              if (docp4.value != "" && validacion_solonumeros.test(docp4.value) ){
                if (docp5.value != ""){
                  if (docp6.value != "" && validacion_solonumeros.test(docp6.value) ){
                    if (docp7.value != "" && validacion_solonumeros.test(docp7.value) ){

          var insert_data = document.querySelector("#tabla_producto_entrada");
          insert_data.innerHTML += 
            `
      <tr>
            <td><a name='${acomulador_codigoproducto.push(docp1.value)}'>${docp1.value}</a></td>
            <td <a name='${acomulador_nombreproducto.push(docp2.value)}'>${docp2.value}</a></td>
            <td <a name='${acomulador_marca.push(docp3.value)}'>${docp3.value}</a></td>
            <td <a name='${acomulador_cantidad.push(docp4.value)}'>${docp4.value}</a></td>
            <td <a name='${acomulador_und_medida.push(docp5.value)}'>${docp5.value}</a></td>
            <td <a name='${acomulador_iva.push(docp6.value)}'>${docp6.value}</a></td>
            <td <a name='${acomulador_precio.push(docp7.value)}'>${docp7.value}</a></td>
            <td>reservado para mas adelante</td>
      </tr>
            `
            docp1.value = "";
            docp2.value = "";
            docp3.value = "";
            docp4.value = "";
            docp5.value = "";
            docp6.value = "";
            docp7.value = "";           

               }else{msnsend("el campo PRECIO POR UNIDAD no es correcto o esta vacio","campo vacio",4000,'warning');}
              }else{msnsend("el campo IVA no es correcto o esta vacio","campo vacio",4000,'warning');}
             }else{msnsend("el campo UND/MEDIDA no es correcto o esta vacio","campo vacio",4000,'warning');}
            }else{msnsend("el campo CANTIDAD no es correcto o esta vacio","campo vacio",4000,'warning');}
           }else{msnsend("el campo NOMBRE DEL PRODUCTO no es correcto o esta vacio","campo vacio",4000,'warning');}
          }else{msnsend("el campo NUMERO DE PRODUCTO no es correcto o esta vacio","campo vacio",4000,'warning');}
         });


         //esto es para el envio de datos a php 

         var entrada_o_salida = 0;
         const registrar_movimiento = (tipo_doc) => (function () { 
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
          docp1 = acomulador_codigoproducto;
          docp2 = acomulador_nombreproducto;
          docp3 = acomulador_marca;
          docp4 = acomulador_cantidad;
          docp5 = acomulador_und_medida;
          docp6 = acomulador_iva;
          docp7 = acomulador_precio;
              if (doce11 != "" && validacion_solonumeros.test(doce11) ){
                if (doce10 != ""){ 
                  if (doce8 != ""){
                    if (doce1 != "" && validacion_solonumeros.test(doce1)){
                      if (doce2 != "" && validacion_texto.test(doce2)){
                        if (doce4 != ""){
                          if (acomulador_codigoproducto != ""){
                          $.ajax({
                            type: "post",
                            url: "/php/crearentrada.php",
                            datatype: 'JSON',
                            data: {doce1,doce2,doce3,doce4,doce5,doce6,doce7,
                            doce8,doce9,doce10,doce11,doce12,doce13,docp1,docp2,docp3,docp4,docp5,docp6,docp7},
                            success: function (data) 
                            {           
              if (data != "")
               {
                msnsend(data,"error al guardar",10000,"error")
               }else{
                msnsend("la informacion fue guardada satisfactoriamente","guardado",5000,"success")
                tablacontenido_tercero();
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

        //esto es para generar el formulario de entradas

        var estado_entrada = document.getElementById('btn-pop-up');

        estado_entrada.addEventListener('click',function(){    
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
        });

        //esto es para generar el formulario de salidas

        var estado_salida = document.getElementById('btn-pop-upmovimiento2');
        
        estado_salida.addEventListener('click',function(){
        entrada_o_salida = 2;
        var doc_ref = document.getElementById('doc_ref');
        doc_ref.disabled = true; doc_ref.className = 'doc_entrada';
        var doc_titulo_t = document.getElementById('titulo_transaccion');
        doc_titulo_t.innerHTML = 'registrar <br> salida';
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
      });

       /* esto es para enviar el formulario, la variable "entrada_o_salida" 
          controla si el estado "1 = entradas" o "2 = salidas" en la base de datos */   
      $('#mbtn_1').click(registrar_movimiento (entrada_o_salida));
    
    
    });






        //esta es la consulta de datos que se va a mostrar en la tabla  "centro de costos agregados"

        function tablacontenido_cc (){

          const xhtpp = new XMLHttpRequest();
   
          xhtpp.open('get','../php/consulta_tabladatoscc.php',true);
          
          xhtpp.send();
          
          xhtpp.onreadystatechange = function(){
            if (this.readyState=== 4 && this.status=== 200)
            {
            
              var data = JSON.parse(this.responseText);           
              var res = document.querySelector("#tablacontenidoc_c");
              res.innerHTML = "";
          
              for (let itemcostos of data){
                res.innerHTML += 
                `
                <tr>
                      <td>${itemcostos.idc_costos}</td>
                      <td>${itemcostos.nombre}</td>
                </tr>
                `;
              }
          
            }
          }
         }
   












   
           //esta es la consulta de datos que se va a mostrar en la tabla  "unidades de medida"
   
           function tablacontenido_und (){
   
             const xhtpp = new XMLHttpRequest();  
      
             xhtpp.open('post','../php/consulta_tabladatosund.php',true);
             
             xhtpp.send();
             
             xhtpp.onreadystatechange = function(){
               if (this.readyState=== 4 && this.status=== 200)
               {
               
                 var dataundmedida = JSON.parse(this.responseText); 
                 var undtable = document.querySelector("#tablacontenidound");
                 undtable.innerHTML = "";
    
                 for (let itemund of dataundmedida){
                   undtable.innerHTML += 
                   `
                   <tr>
                         <td>${itemund.codigo_und}</td>
                         <td>${itemund.nombre}</td>
                   </tr>
                   `;
                 }
               }
             }
            }
      

           //esta es la consulta de datos que se va a mostrar en la tabla  "productos agregados"
   
           function tablacontenido_producto (){
   
            const xhtpp = new XMLHttpRequest();  
     
            xhtpp.open('post','../php/consulta_tablaproducto.php',true);
            
            xhtpp.send();
            
            xhtpp.onreadystatechange = function(){
              if (this.readyState=== 4 && this.status=== 200)
              {
              
                var dataproducto = JSON.parse(this.responseText); 
                var productotable = document.querySelector("#tablacontenidoproducto");
                productotable.innerHTML = "";
                
                for (let item of dataproducto){
                  productotable.innerHTML += 
                  `
                  <tr>

                        <td>${item.idcodigoproducto}</td>
                        <td>${item.nombre_producto}</td>
                        <td>${item.marca}</td>
                        <td>${item.idcc_costeo.nombre}</td>
                        <td>${item.codigo_und.nombre}</td>
                        <td>${item.ref_adicional}</td>
                        <td>${item.idc_costos.nombre}</td>
                        <td>${item.imp_iva}%</td>
                        <td>${item.precio_compra}</td>
                        <td>${item.precio_venta}</td>
                        <td>${item.observaciones}</td>
                        <td>campo reservado para mas adelante</td>
                  </tr>
                  `;
                }
              }
            }
           }



           //esta es la consulta de datos que se va a mostrar en la tabla  "terceros creados"
   
           function tablacontenido_tercero (){
   
            const xhtpp = new XMLHttpRequest();  
     
            xhtpp.open('post','../php/consulta_tabla_tercero.php',true);
            
            xhtpp.send();
            
            xhtpp.onreadystatechange = function(){
              if (this.readyState=== 4 && this.status=== 200)
              {
              
                var datatercero = JSON.parse(this.responseText); 
                var tercerotable = document.querySelector("#tablacontenidotercero");
                tercerotable.innerHTML = "";
                
                for (let item of datatercero){
                  tercerotable.innerHTML += 
                  `
                  <tr>
                        <td>${item.tipo_identificacion}</td>
                        <td>${item.identificacion}</td>
                        <td>${item.razon_social}</td>
                        <td>${item.apellido}</td>
                        <td>${item.direccion}</td>
                        <td>${item.telefono1}</td>
                        <td>${item.telefono2}</td>
                        <td>${item.correo1}</td>
                        <td>${item.correo2}</td>
                        <td>${item.idtipotercero.nombre}</td>
                        <td>campo reservado para mas adelante</td>
                  </tr>
                  `;
                }
              }
            }
           }

           //esta es la consulta de datos que se va a mostrar en la tabla  "transaccines creadas"
           
           function tablacontenido_tercero (){
   
          $.ajax({
            type: "post",
            url: "../php/consultatransaccion.php",
            data: "data",
            dataType: "json",
            success: function (data) {
              var transacciontable = document.getElementById('tablacontenido_transaccion');
              transacciontable.innerHTML = '';
              for(let item of data){
                transacciontable.innerHTML += 
                `
                <tr>
                      <td>${item.numero_documento}</td>
                      <td>${item.fecha}</td>
                      <td>${item.identificacion}</td>
                      <td>${item.razon_social}</td>
                      <td>${item.apellido}</td>
                      <td>${item.docref}</td>
                      <td>${item.observaciones}</td>
                      <td>${item.iva}</td>
                      <td>${item.precio_total}</td>
                      <td>${item.descripcion}</td>
                      <td>reservado para mas adelante</td>
                </tr>
                `;
              }
            }
          });
            
           }



               //constructor actualizar los campos de input lista (datalist) de los formularios

               function datalist (medoto,geturl,idsearch){
   
                const xhtpp = new XMLHttpRequest();  
         
                xhtpp.open(medoto,geturl,true);
                
                xhtpp.send();
                
                xhtpp.onreadystatechange = function(){
                  if (this.readyState=== 4 && this.status=== 200)
                  {
                  
                    var insertdata = JSON.parse(this.responseText); 
                    var datalist = document.querySelector(idsearch);
                        datalist.innerHTML = "";
                    for (let item2 of insertdata){
                        datalist.innerHTML += 
                        `<option value= "${item2.nombre}">`
                    }
                 }
                }
               }

               function identificacion_tercero2 (medotot,geturlt,idsearcht){
   
                const xhtpp = new XMLHttpRequest();  
         
                xhtpp.open(medotot,geturlt,true);
                
                xhtpp.send();
                
                xhtpp.onreadystatechange = function(){
                  if (this.readyState=== 4 && this.status=== 200)
                  {
                  
                    var insertdata = JSON.parse(this.responseText); 
                    var datalist = document.querySelector(idsearcht);
                        datalist.innerHTML = "";
                    for (let item3 of insertdata){
                        datalist.innerHTML += 
                        `<option value= "${item3.identificacion}">`
                    }
                 }
                }
               }




              

               function codigo_producto2 (medotop,geturlp,idsearchp){
   
                const xhtpp = new XMLHttpRequest();  
         
                xhtpp.open(medotop,geturlp,true);
                
                xhtpp.send();
                
                xhtpp.onreadystatechange = function(){
                  if (this.readyState=== 4 && this.status=== 200)
                  {
                  
                    var insertdata = JSON.parse(this.responseText); 
                    var datalist = document.querySelector(idsearchp);
                        datalist.innerHTML = "";
                    for (let item4 of insertdata){
                        datalist.innerHTML += 
                        `<option value= "${item4.idcodigoproducto}">`
                    }
                 }
                }
               }
               

        //ejecuta la tabla cuando se carga un formulario
             
        window.onload = function() {
          //funciones a ejecutar
         tablacontenido_cc();
         tablacontenido_und();
         tablacontenido_producto();
         datalist('post','../php/consulta_tabladatosund.php','#datalistund')
         datalist('post','../php/consulta_tabladatoscc.php','#dataliscc')
         datalist('post','../php/consulta_calculo_costeo.php','#calculocosteo')
         datalist('post','../php/consulta_tipo_tercero.php','#id-tipotercero')
         datalist('post','../php/consultatercero.php','#doc-razon-social')
         datalist('post','../php/consultaproducto.php','#doc-nombre-producto')
         identificacion_tercero2('post','../php/consultatercero.php','#doc-numero-identificacion')
         codigo_producto2('post','../php/consultaproducto.php','#doc-numero-producto')
         $(".doc_entrada").attr('disabled','disabled');
         tablacontenido_tercero();
        };








            