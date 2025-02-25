import { postusers,  getusers, updateusers, deleteuser} from "./services/usuarios.js"

const nom =document.getElementById("nom")
const correo =document.getElementById("correo")
const but =document.getElementById("but")

but.addEventListener("click",function(){
    console.log("but")
postusers(nom.value, correo.value)




})
