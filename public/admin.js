import {deleteSolis, getSolis, postSolis} from"./services/llamadossolis.js";
const solix =document.getElementById("solix");


mconsul()

async function mconsul() {
const datos = await  getSolis()

for (let index = 0; index < datos.length; index++) {

        const cont = datos[index].soli;

        let consul = document.createElement("div");
        consul.id ="divconsul"

        let donsul = document.createElement("div");
        donsul.id ="divdonsul"
        donsul.textContent = cont
        

        consul.appendChild(donsul);
        solix.appendChild(consul)

        let checbox = document.createElement ("input")
        checbox. setAttribute("type", "checkbox")

        let eliminar =document.createElement ("button")
        eliminar.textContent = "eliminar"

        consul.appendChild(eliminar);
        consul.appendChild(checbox);

        eliminar.addEventListener("click", function() {
            deleteSolis(datos[index].id);
            setTimeout(() => {
                location.reload()
            }, 500);
           
            
        })
        checbox.addEventListener("change", function() {
            checbox.checked = true;
        })

    }
}
