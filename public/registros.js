import { postusers,  getusers, updateusers, deleteuser} from "./services/usuarios.js"

const nomr =document.getElementById("nomr")
const passr =document.getElementById("passr")
const but =document.getElementById("but")

but.addEventListener("click",function(){
    console.log("but")
    postusers(nomr.value, passr.value)



})
