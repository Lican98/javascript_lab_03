var ampolleta = document.getElementById("ampolleta")
var botonOff = document.getElementById("apagar")
var botonOn = document.getElementById("encender")

botonOn.addEventListener("click",function(){
    console.log("encender")
    ampolleta.src = "https://www.w3schools.com/js/pic_bulbon.gif"
})

botonOff.addEventListener("click",function(){
    console.log("apagar")
    ampolleta.src = "https://www.w3schools.com/js/pic_bulboff.gif"
})
