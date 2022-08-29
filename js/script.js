$(document).ready(function(){
     
    $('#btnSend').click(function(){

        var errores = '';

        //Valido Nombre completo ==================================
        if( $('#Nombre Completo').val() == '' ){
            errores += '<p>Escriba el Nombre completo</p>';
        }

        //Valido Correo electronico =================================
        if( $('#Correo').val() == '' ){
            errores += '<p>Ingrese su correo</p>';
        }

        //Valido Proyecto ==================================
        if( $('#Proyecto').val() == '' ){
            errores  += '<p>Escriba su proyecto</p>';
        }

        // ENVIADO FORMULARIO =====================================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                     '<div class="mensaje_modal">'+
                                         '<h3>Errores encontrados</h3>'+
                                          errores+
                                          '<span id="btnClose">Cerrar</span>'+
                                     '</div>'+
                                '</div>'
        
        $('body').append(mensajeModal); 
  }
   
  // CERRANDO MODAL =============================
  $('#btnClose').click(function(){
      $('.modal_wrap').remove();
  })
});
});