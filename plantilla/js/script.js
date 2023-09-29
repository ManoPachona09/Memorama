let posi= [0,1,2,3,4,5,6,7,8,9,10,11];
let imag=["/img/images/darth.png","/img/images/lego.png","/img/images/mando.png","/img/images/maul.png","/img/images/r2c3.png","/img/images/stomp.png"
,"/img/images/darth.png","/img/images/lego.png","/img/images/mando.png","/img/images/maul.png","/img/images/r2c3.png","/img/images/stomp.png"];
let i=posi.length, j, temp;
 while (--i>0) {
    j=Math.floor(Math.random()*(i+1));
    temp=posi[j];
    posi[j]=posi[i];
    posi[i]=temp;
 }
 let fallas=0
 let clic=0 
let pc=0
let sc=0
let tiempoInicio = 0
let tiempoTranscurrido = 0
let contadorClicks = 0
let totalClicks = 12



function tapar() {
   document.getElementById("img"+pc).src="/img/images/back.png";
   document.getElementById("img"+sc).src="/img/images/back.png"; 
}

function clic1(c){

  clic++
  document.getElementById("img"+c).src=imag[posi[c]];
   if (clic=== 1){
      pc=c;
   }
   if(clic===2){ 
        sc=c;
       
       clic=0
       sc=c
       if(imag[posi[sc]]!==imag[posi[pc]]){
fallas++;
setTimeout("tapar()",1000);


       }

  
}
}

function reiniciarImagenes() {
   for (let i = 0; i < 12; i++) {
       document.getElementById("img" + i).src = "/img/images/back.png";
   }

}
document.getElementById("resetButton").addEventListener("click", reiniciarImagenes);
 
/*function actualizarTemporizador() {
   tiempoTranscurrido = Math.floor((Date.now() - tiempoInicio) / 1000);
   document.getElementById("timer").textContent = tiempoTranscurrido + " segundos";
}

// Función que se ejecuta cuando se hace clic en una imagen
function clic2(index) {
   if (tiempoInicio === 0) {
       tiempoInicio = Date.now();
       setInterval(actualizarTemporizador, 1000); // Inicia el temporizador
   }
   contadorClicks++;
   document.getElementById(`img${index}`).src = "/images/back.png";
   if (contadorClicks === totalClicks) {
       clearInterval(actualizarTemporizador); // Detiene el temporizador cuando se hacen clics en todas las imágenes
       alert(`¡Todas las imágenes han sido clickeadas en ${tiempoTranscurrido} segundos!`);
   }
}*/
