let configTeclat = { prevent_repeat : true}
let eventTeclat = new  window.keypress.Listener(this,configTeclat)

eventTeclat.simple_combo("a",sonidoa)
eventTeclat.simple_combo("s",sonidos)
eventTeclat.simple_combo("d",sonidod)
eventTeclat.simple_combo("f",sonidof)
eventTeclat.simple_combo("g",sonidog)
eventTeclat.simple_combo("h",sonido2)
eventTeclat.sequence_combo("z",sonidoz)
eventTeclat.sequence_combo("x",sonidox)
eventTeclat.sequence_combo("c",sonidoc)
eventTeclat.sequence_combo("v",sonidov)


function sonidoa(){
 var sonido= new Audio("./misc186.mp3")
 sonido.play()
}
function sonidos(){
    var sonido = new Audio("./sonidos/ringtones-old-telephone.mp3")
    sonido.play()
}
function sonidod(){
    var sonido = new Audio("./sonidos/ringtones-pink-panther.mp3")
    sonido.play()
}
function sonidof(){
    var sonido = new Audio("./sonidos/x08558845_prev.mp3")
    sonido.play()
}
function sonidog(){
    var sonido = new Audio("./sonidos/9-mm-gunshot.mp3")
    sonido.play()
}
function sonido2(){
    var sonido = new Audio("./sonidos/baseball-jingle.mp3")
    sonido.play()
}
function sonidoz(){
    var sonido = new Audio("./sonidos/avido_1.mp3")
    sonido.play()
}
function sonidox(){
    var sonido = new Audio("./sonidos/bob-esponja-flamenco-cancion-.mp3")
    sonido.play()
}   
function sonidoc(){
    var sonido = new Audio("")
    sonido.play()
}
function sonidov(){
    var sonido = new Audio("")
    sonido.play()
}

