import {deleteSolis, getSolis, updateSolis, postSolis} from"./services/llamadossolis.js";
const but =document.getElementById("but")
const solid =document.getElementById("solid")
const inp = document.getElementById("inp")


but.addEventListener("click",  function(){
    postSolis(inp.value)
   location.reload()
        
    })
    mcon()
    async function mcon(){

        const solis = await getSolis();

       for(let index = 0; index < solis.length; index++){
    
        const cont = solis[index].soli;

        let consul = document.createElement("div");
        consul.id ="divconsul"

        let donsul = document.createElement("div");
        donsul.id ="divdonsul"
        donsul.textContent = cont
        

        let butEdit = document.createElement("button");
        butEdit.textContent = "editar"
        butEdit.id ="butEdit"

        consul.appendChild(donsul);
        consul.appendChild(butEdit)
        solid.appendChild(consul)
        
        
        butEdit.addEventListener("click", function(){

            swal.fire({
                title: 'Ingrese el nuevo valor',
                input: 'text',
                inputValue: cont,
                showCancelButton: true,
                confirmButtonText: 'Actualizar',
                cancelButtonText: 'Cancelar'
            })

             .then((result) => {
                if (result.isConfirmed) {
                  const value = result.value;
                  donsul.textContent = value;

                  updateSolis(value,solis[index].id)
                } 
              })

        })


    }
 }
