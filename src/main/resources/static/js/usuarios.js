// Call the dataTables jQuery plugin
$(document).ready(function() {

  loadUsuarios();

  $('#usuarios').DataTable();
});

// *---LISTAR USUARIOS---*
async function loadUsuarios(){

  const request = await fetch("/usuario",{
    method: "get",
    headers: {
      "Accept":"application/json",
      "Content-Type": "application/json"
    } 
  });
  const usuarios = await request.json();
  
  console.log(usuarios);

    let listadoHtml = "";

  for(let usuario of usuarios){

    let btnEliminar = '<a href="#" onclick="eliminarUsuario('+ usuario.id +')" class="btn btn-danger btn-circle btn-sm m-1"><i class="fas fa-trash"></i></a>',
      btnConsultar = '<a href="#" onclick="editarUsuario('+ usuario.id +')" class="btn btn-info btn-circle btn-sm m-1"><i class="fas fa-info-circle"></i></a>';

    let usuarioHtml = '<td>'+ usuario.id +'</td><td>'+ usuario.nombre +' '+ usuario.apellido +'</td><td>'+ usuario.email +'</td><td>'+ usuario.direccion +'</td><td>'+ usuario.telefono +'</td><td class="btnContainer">'+ btnConsultar + ' ' + btnEliminar + '</td></tr>';

    listadoHtml+=usuarioHtml;
    
  }

  document.querySelector("#usuarios tbody").outerHTML=listadoHtml;
} 

//*---ELIMINAR USUARIOS---*
async function eliminarUsuario(id){

  const request = await fetch("/usuario/" + id,{
    method: "delete",
    headers: {
      "Accept":"application/json",
      "Content-Type": "application/json"
    } 
  });

  loadUsuarios(); 
  
}

//*---EDITAR USUARIOS---*
async function editarUsuario(id){
  
  const $form = document.querySelector(".form");
  const $inputNombre = d.querySelector("#inputName"),
  $inputApellido = d.querySelector("#inputLastName"),
  $inputEmail = d.querySelector("#inputEmail"),
  $inputDireccion = d.querySelector("#inputaddress"),
  $inputTelefono = d.querySelector("#inputPhone"),
  $btnGuardar = d.querySelector("#btnGuardar"),
  $btnEditar = d.querySelector("#btnEditar"),
  $btnAdd = d.querySelector("#buttonAdd");
 
  $form.classList.toggle("formActivo");
  
  $btnGuardar.classList.add("form");
  $btnEditar.classList.remove("form");

  const request = await fetch("/usuario/" + id,{
    method: "get",
    headers: {
      "Accept":"application/json",
      "Content-Type": "application/json"
    } 
  });

  const usuario = await request.json();

  $inputNombre.value = usuario.nombre;
  $inputApellido.value = usuario.apellido;
  $inputEmail.value = usuario.email;
  $inputDireccion.value = usuario.direccion;
  $inputTelefono.value = usuario.telefono;

  let newdatos = {};

  $btnEditar.addEventListener("click", async()=>{

    newdatos.id = usuario.id;
    newdatos.nombre = $inputNombre.value;
    newdatos.apellido = $inputApellido.value;
    newdatos.email = $inputEmail.value;
    newdatos.direccion = $inputDireccion.value;
    newdatos.telefono = $inputTelefono.value;

    const request = await fetch("/usuario",{
      method: "put",
      headers: {
        "Accept":"application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newdatos) 
    })

    loadUsuarios();
    $form.classList.remove("formActivo");
    

  })
  
  return;
  
}

//*---CARGAR USUARIOS---*
const $btnAdd = document.querySelector("#btnGuardar");

$btnAdd.addEventListener("click", ()=>{agregarUsuario();});

async function agregarUsuario(){

  const $inputNombre = d.querySelector("#inputName"),
  $inputApellido = d.querySelector("#inputLastName"),
  $inputEmail = d.querySelector("#inputEmail"),
  $inputDireccion = d.querySelector("#inputaddress"),
  $inputTelefono = d.querySelector("#inputPhone");

  
 let datos = {};

  datos.nombre = $inputNombre.value;
  datos.apellido = $inputApellido.value;
  datos.email = $inputEmail.value;
  datos.direccion = $inputDireccion.value;
  datos.telefono = $inputTelefono.value;

  

 const request = await fetch("/usuario",{
    method: "post",
    headers: {
      "Accept":"application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos) 
  })

  loadUsuarios();
  
  document.querySelector(".form").classList.remove("formActivo");
  
  
  
  $inputNombre.value = "";
  $inputApellido.value = "";
  $inputEmail.value = "";
  $inputDireccion.value = "";
  $inputTelefono.value = "";

}
