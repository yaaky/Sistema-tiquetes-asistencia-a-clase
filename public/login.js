import { postusers,  getusers, updateusers, deleteuser} from "./services/usuarios.js"

const nom =document.getElementById("nom")
const pass =document.getElementById("pass")
const but =document.getElementById("but")
but.addEventListener("click",  async function () {

    console.log("sirve")

    const datos = await getusers();

    for(let index =0; index < datos.length; index++){

        if(nom.value === datos[index].nomr && pass.value === datos[index].passr){

            if(datos[index].rol==="administrador"){
                window.location.href="admin.html"
            }else{
                window.location.href="estudiante.html"
            }
            
        
           }
    }
   
 })