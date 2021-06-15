document.addEventListener("DOMContentLoaded", iniciarEscucha);

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  form.reset();
}

function iniciarEscucha() {
  document
    .getElementById("codigo")
    .addEventListener("change", (e) => buscarCodigo(e.target.value));
  /*  document.getElementById('codigo').addEventListener('change',(e)=>console.log(e.target.value)); */
  document.getElementById("submit").addEventListener("submit", cargarTalonario);
}

function cargarTalonario(e) {
  e.preventDefault();
  console.log("tocaste submit");
  console.log(e);
  return false;
}

let conexion;

function buscarCodigo(e) {
  var codigo = document.getElementById("codigo").value;
  console.log(codigo);
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = mostrarResultados;

  conexion.open("GET", "class/articulos.php?codigo=" + codigo, true);
  conexion.send();
}

let escribirInput = document.getElementById("descripcion_articulo");



let msj_error=document.getElementById('msj_error');
function mostrarResultados()
{
  msj_error.style.visibility="hidden";
  if(conexion.readyState==4)
  {
    let resultado=conexion.responseText;
    if(resultado!="error")
    {
      escribirInput.value = resultado;
    }else{
      msj_error.style.visibility="visible";
      escribirInput.value="";
    }
  }
}

openPage = function () {
  let dir =
    "talonario.php?codigo=" +
    document.getElementById("codigo").value +
    "&descripcion=" +
    document.getElementById("descripcion_articulo").value +
    "&descripcion_falla=" +
    document.getElementById("descripcion_falla").value;
 /*  location.href =dir;   */
   window.open(dir,"_blank");
  /* window.location.replace(dir); */
  /*  "2.html?Key="+scrt_var */
};

function clearInp() {
  let arr = (document.getElementsByTagName("input").value = "");
  console.log(arr);
}
