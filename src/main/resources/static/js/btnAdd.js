const d = document;
console.log("Estoy aca")
const $buttonAdd = d.querySelector("#buttonAdd"),
$form = d.querySelector(".form"),
$btnCancel = d.querySelector("#btnCancel"),
$btnGuardar = d.querySelector("#btnGuardar");
  

$buttonAdd.addEventListener("click", ()=>{
    $form.classList.toggle("formActivo")
    $buttonAdd.classList.toggle("btnAddInactivo")
})
$btnCancel.addEventListener("click", ()=>{
    $form.classList.remove("formActivo")
    $buttonAdd.classList.remove("btnAddInactivo")
})
$btnGuardar.addEventListener("click", ()=>{
    $form.classList.remove("formActivo")
    $buttonAdd.classList.remove("btnAddInactivo")

   

  
})

/*d.addEventListener("click", (e)=>{
 console.log(e);
    if(e.target.matches($buttonAdd)||e.target.matches(`${$buttonAdd} *`) ){
        console.log("Estoy aca2")
        d.querySelector($form).classList.toggle("formActivo")
        d.querySelector($buttonAdd).classList.toggle("btnAddInactivo")
    }
    if(e.target.matches($btnCancel)){
        d.querySelector($form).classList.remove("formActivo")
        d.querySelector($buttonAdd).classList.remove("btnAddInactivo")
    }
    if(e.target.matches($btnGuardar)){
        d.querySelector($form).classList.remove("formActivo")
        d.querySelector($buttonAdd).classList.remove("btnAddInactivo")
        
    }
})*/
