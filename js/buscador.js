$(document).ready(function(){
    
     $.ajax({
    url: './ciudad.php',
    dataType: "text",
    cache: false,
    contentType: false,
    processData: false,
    data:'',
    type: 'get',
    success: function(data){
      $('#selectCiudad').append(data)
    },
    error: function(){
      alert("error al encontrar archivos");
    }
  });

        $.ajax({
    url: './tipo.php',
    dataType: "text",
    cache: false,
    contentType: false,
    processData: false,
    data:'',
    type: 'get',
    success: function(data){
      $('#selectTipo').append(data)
    },
    error: function(){
      alert("error al encontrar archivos");
    }
  });


});


$("#mostrarTodos").click(function(){
     $.ajax({
    url: './buscador.php',
    dataType: "json",
    cache: false,
    contentType: false,
    processData: false,
    data:'',
    type: 'get',
    success: function(data){
      mostrarTodos(data)
    },
    error: function(){
      alert("error al enviar los datos");
    }
  });
})

function mostrarTodos(data){
    clean();
    data= JSON.parse(data);
    for (var i = 1; i <= data.length; i++) {
    // $('#ja').append('<strong>'+data[i].Precio+': </strong><br>')
    $('#ja').append('<div class="itemMostrado card"><img src="img/home.jpg" class="image">'+
      '<div class="card-stacked"><strong>Direccion: </strong>'+data[i].Direccion +'<br><br>'+
      '<strong>Ciudad: </strong>'+data[i].Ciudad+'<br><br>'+
      '<strong>Telefono: </strong>'+data[i].Telefono +'<br><br>'+
      '<strong>Codigo Postal: </strong>'+data[i].Codigo_Postal +'<br><br>'+
      '<strong>Tipo: </strong>'+data[i].Tipo +'<br><br>'+
      '<strong>Precio: </strong><span class="precioTexto"><strong >'+data[i].Precio
     +'</span></strong></div></div>')
      }

 }

 
$('#submitButton').click(function(event){
  event.preventDefault();
  
    $.ajax({
    url: './buscador.php',
    dataType: "json",
    cache: false,
    contentType: false,
    processData: false,
    data:'',
    type: 'get',
    success: function(data){
      valor(data)
    },
    error: function(){
      alert("error al enviar los datos");
    }
  });
})

function  valor(data){
  clean();
  var tipo = $('#selectTipo').val()
  var ciudad = $('#selectCiudad').val()
  var valor = $('#rangoPrecio').val().split(";");
  data= JSON.parse(data);
    for (var i = 1; i <= data.length; i++) {
      var precio = data[i].Precio;
      var precio = precio.replace(',','')
      var precio = precio.replace('$','')
      var precio  = parseInt(precio)
      if (precio>=valor[0]&& precio <=valor[1] && tipo ==data[i].Tipo && ciudad==data[i].Ciudad ){
        $('#ja').append('<div class="itemMostrado card"><img src="img/home.jpg" class="image">'+
          '<div class="card-stacked"><strong>Direccion: </strong>'+data[i].Direccion +'<br><br>'+
          '<strong>Ciudad: </strong>'+data[i].Ciudad+'<br><br>'+
          '<strong>Telefono: </strong>'+data[i].Telefono +'<br><br>'+
          '<strong>Codigo Postal: </strong>'+data[i].Codigo_Postal +'<br><br>'+
          '<strong>Tipo: </strong>'+data[i].Tipo +'<br><br>'+
          '<strong>Precio: </strong><span class="precioTexto"><strong >'+data[i].Precio
        +'</span></strong></div></div>')
      }else if(precio>=valor[0]&& precio <=valor[1] && tipo ==data[i].Tipo && ciudad==''){
        $('#ja').append('<div class="itemMostrado card"><img src="img/home.jpg" class="image">'+
          '<div class="card-stacked"><strong>Direccion: </strong>'+data[i].Direccion +'<br><br>'+
          '<strong>Ciudad: </strong>'+data[i].Ciudad+'<br><br>'+
          '<strong>Telefono: </strong>'+data[i].Telefono +'<br><br>'+
          '<strong>Codigo Postal: </strong>'+data[i].Codigo_Postal +'<br><br>'+
          '<strong>Tipo: </strong>'+data[i].Tipo +'<br><br>'+
          '<strong>Precio: </strong><span class="precioTexto"><strong >'+data[i].Precio
        +'</span></strong></div></div>')
      }else{
         if (precio>=valor[0]&& precio <=valor[1] && tipo =='' && ciudad=='') {
           $('#ja').append('<div class="itemMostrado card"><img src="img/home.jpg" class="image">'+
          '<div class="card-stacked"><strong>Direccion: </strong>'+data[i].Direccion +'<br><br>'+
          '<strong>Ciudad: </strong>'+data[i].Ciudad+'<br><br>'+
          '<strong>Telefono: </strong>'+data[i].Telefono +'<br><br>'+
          '<strong>Codigo Postal: </strong>'+data[i].Codigo_Postal +'<br><br>'+
          '<strong>Tipo: </strong>'+data[i].Tipo +'<br><br>'+
          '<strong>Precio: </strong><span class="precioTexto"><strong >'+data[i].Precio
        +'</span></strong></div></div>')
         }
      }
    }

 }

function clean (){
  $('#ja').html('')
}