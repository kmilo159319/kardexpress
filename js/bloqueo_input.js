
$(document).on('ready',function() {

// esto es para permitir al usuario digitar solo numeros
    jQuery("#codigo-producto").on('input', function (evt) {
        jQuery(this).val(jQuery(this).val().replace(/[^0-9]/g, ''));       
});

jQuery("#p-iva").on('input', function (evt) {
  jQuery(this).val(jQuery(this).val().replace(/[^0-9]/g, ''));       
});


jQuery("#precio-compra").on('input', function (evt) {
  jQuery(this).val(jQuery(this).val().replace(/[^0-9]/g, ''));       
});

jQuery("#precio-venta").on('input', function (evt) {
  jQuery(this).val(jQuery(this).val().replace(/[^0-9]/g, ''));       
});


jQuery("#identificacion").on('input', function (evt) {
  jQuery(this).val(jQuery(this).val().replace(/[^0-9]/g, ''));       
});

jQuery("#telefono1").on('input', function (evt) {
  jQuery(this).val(jQuery(this).val().replace(/[^0-9]/g, ''));       
});
jQuery("#Telefono2").on('input', function (evt) {
  jQuery(this).val(jQuery(this).val().replace(/[^0-9]/g, ''));       
});

jQuery("#tidentificacion").on('input', function (evt) {
  jQuery(this).val(jQuery(this).val().replace(/[^a-zA-Z ]/g, ''));       
});

jQuery("#tipo-tercero").on('input', function (evt) {
  jQuery(this).val(jQuery(this).val().replace(/[^a-zA-Z ]/g, ''));       
});

  });