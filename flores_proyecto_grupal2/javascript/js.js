
function cambiarflores(box){
    
    var floresimg = new Array(5);
    
        floresimg[0]="images/rosas_rojas.jpg";
         floresimg[1]="images/rosas_rosas.jpg";
         floresimg[2]="images/rosas_amarillas.jpg";
         floresimg[3]="images/rosas_blancas.jpg";
         floresimg[4]="images/rosas_multi.jpg";
    
             document.getElementById('flores').src=floresimg[parseInt(box.value)]}


function validarZapatos(name1,apell1,tel,email){
    var x=document.getElementById("name1").value;
    if(x== ""){
        alert("Pon el nombre");
    }
    if(x== ""){
        alert("Pon el apellido");
    }
    if(x== ""){
        alert("Pon el telefono");
    }
    if(x== ""){
        alert("Pon el email");
    }
}




