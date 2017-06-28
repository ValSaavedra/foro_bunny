$(document).ready(function(){
    $("button").click(function(e){
        e.preventDefault(); //detiene acción por defecto
        var name = $("#nombre").val();
        var message = $("#mensaje").val();

        if(name == "" && message == ""){
            alert("Debes escribir tu nombre y mensaje");
        }else{
            $("#comentarios").append("<div><span class='center-align'>" + name + "</span><p class='center-align'>"+ message+"</p></div>");
        }
    });
});

		 //guarda los valores en las variables name y message , previene campos vacíos