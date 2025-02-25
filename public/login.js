import { postusers,  getusers, updateusers, deleteuser} from "./services/usuarios.js"

const nom =document.getElementById("nom")
const pass =document.getElementById("pass")
const but =document.getElementById("but")

ingresa()
async function ingresa() {
    const datos =await getusers()

    console.log(datos)

    for (let index= 0; index < datos.length; index++){
        but.addEventListener("clik", function() {
            if (datos[index].typeuser === "admin") {
                
            } else {
                return false;
            }
        })
    }
}
but.addEventListener("click", function(){

    console.log("user")
})

