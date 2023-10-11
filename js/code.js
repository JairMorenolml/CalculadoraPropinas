//--->
function calcular()

{
var monto = parseFloat(document.getElementById("monto").value);
var porcentajePropina = parseFloat(document.getElementById("%_propina").value);

var porcentaje = porcentajePropina/100;
var result = monto * porcentaje;
var totalPagar = result + monto;


if (isNaN(monto) || isNaN(porcentajePropina)) {
    alert("Por favor, ingrese los valores Solicitados");return
} 
else {
    document.getElementById("monto_propina").value = Math.trunc(result);
    document.getElementById("total_a_pagar").value = Math.trunc(totalPagar);
    document.getElementById("mensaje").innerHTML = "¡¡Operacion Realizada!!"
}
}
//--->
function reset() {
    document.getElementById("monto").value = "";
    document.getElementById("%_propina").value = "";
    document.getElementById("monto_propina").value = "";
    document.getElementById("total_a_pagar").value = "";
    document.getElementById("mensaje").innerHTML = "";
}
//--->
function numbersAlone(event){
    let number = event.keyCode;
    if((number < 58 && number > 47) || (number === 8) || (number === 9)){
        return true;
    }
    else{
        return false;
    }
}
