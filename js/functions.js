
document.addEventListener('DOMContentLoaded',iniciarEscucha);

function iniciarEscucha()
{
   
   document.getElementById('codigo').addEventListener('change',(e)=>buscarCodigo(e.target.value));
  /*  document.getElementById('codigo').addEventListener('change',(e)=>console.log(e.target.value)); */

}

let conexion;

function buscarCodigo(e)
{
    var codigo=document.getElementById('codigo').value;
    console.log(codigo);
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = mostrarResultados;

    conexion.open("GET", "class/articulos.php?codigo=" + codigo, true);
    conexion.send();
}

let escribirInput;

function mostrarResultados() {
    escribirInput=document.getElementById('descripcion_articulo');
    if (conexion.readyState == 4) {
       let resultado=conexion.responseText;
       console.log(resultado);
       escribirInput.value=resultado;
    } else {
       //determinar un sitio donde escribir el mensaje
     /*   table.innerHTML= "Cargando...";  */
     }

}
 
openPage = function() {
location.href ="talonario.php?codigo="+document.getElementById('codigo').value+'&descripcion='+document.getElementById('descripcion_articulo').value+'&descripcion_falla='+document.getElementById('descripcion_falla').value;
    /*  "2.html?Key="+scrt_var */
}


function clearInp() {
    
    let arr=document.getElementsByTagName("input").value = "";
    console.log(arr);
    }
/*
let conexion;
function iniciarBusqueda_n(e) {
  let word = e.target.value;
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = mostrarResultados;
  conexion.open(
    "GET",
    "./stock_info_buscar_articulos.php?nombre=" + word,
    true
  );
  conexion.send();
}
function iniciarBusqueda_t(e) {
  let tipo = e.target.value;
  console.log(tipo);
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = mostrarResultados;
  conexion.open("GET", "./stock_info_buscar_articulos.php?tipo=" + tipo, true);
  conexion.send();
}

let table = document.getElementById("table");

function mostrarResultados() {
  limpiarTabla();
 /*  document.getElementById('paginacionLista').innerHTML='';
  let art_PorPagina=3;
  let num_Paginas=0; */
  //let row; //fila de una tabla
  //let data; //campo de una tabla
  //let info; //texto de un data
  //let c = 0;
  //let cantidad = 0,
   // reservado = 0,
    //total = 0;
  //if (conexion.readyState == 4) {
    //var arr = JSON.parse(conexion.responseText);
   /*  num_Paginas=Math.ceil(arr.length / art_PorPagina); *///calcular numero de paginas
    //while (c < arr.length) {
      //cantidad++;
      /* row = document.createElement("tr");
      let c2 = 1;
      while (c2 <= 5) {
        data = document.createElement("td");
        info = document.createTextNode(arr[c][c2]);
        if(c2==4)
        {
          info = document.createTextNode(arr_tipos[arr[c][4]]);//sobreescribo la variable info antes creada
        }
        if(c2 == 5 && arr[c][c2]==1)
        {
          info = document.createElement("a"); //sobreescribo la variable info antes creada
          info.setAttribute("href","#?id="+arr[c][0]);//creo enlace con el id del articulo
          info_txt = arr[c][c2]==1 ? document.createTextNode("Si"):document.createTextNode("No");
          info.appendChild(info_txt);
        }else
        if(c2 == 5)
        {
          info=document.createTextNode("No");//sobreescribo la variable info antes creada
        }
        data.appendChild(info);
        row.appendChild(data);
        c2++;
      }
      if (arr[c][5] == 1) {
        reservado++;
      }
      table.appendChild(row);
      c++;
    }
  } else {
   */  //determinar un sitio donde escribir el mensaje
    /* table.innerHTML= "Cargando..."; */
  /* }
  dibujarList(num_Paginas);
  document.getElementById("stock_cantidad").value = cantidad;
  document.getElementById("stock_reservado").value = reservado;
  document.getElementById("stock_total").value = cantidad - reservado;
} */
