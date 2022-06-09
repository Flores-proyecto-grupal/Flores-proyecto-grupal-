función cambiarflores(caja){
  var floresimg = nueva matriz (5);

        floresimg[0]="imagenes/rosas_rojas.jpg";
         floresimg[1]="imagenes/rosas_rosas.jpg";
         floresimg[2]="imagenes/rosas_amarillas.jpg";
         floresimg[3]="imagenes/rosas_blancas.jpg";
         floresimg[4]="imagenes/rosas_multi.jpg";

             document.getElementById('flores').src=floresimg[parseInt(box.value)]}


function validarZapatos(nombre1,apel1,tel,email){
    var x=documento.getElementById("nombre1").valor;
    si(x== ""){
        alert("Pon el nombre");
    }
    si(x== ""){
        alert("Pon el apellido");
    }
    si(x== ""){
        alert("Pon el telefono");
    }
    si(x== ""){
        alert("Pon el correo");
    }
}
