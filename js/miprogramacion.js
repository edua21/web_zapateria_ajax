$(document).ready(function() {
    $("#producto").click(function(){
        $("#contenido").load("productos.html");
    });
    $("#combo").click(function(){
        $("#contenido").load("combos.html");
    });
});

