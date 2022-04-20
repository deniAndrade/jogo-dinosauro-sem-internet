let dino = document.querySelector('.dino')
let cacto = document.querySelector('.cacto')

function pular(){
  if (dino.classList != 'animar') {
    dino.classList.add('animar')
  }
  setTimeout(function(){
    dino.classList.remove("animar")
  },750)
}
var testeColisao = setInterval(function() {
  var topodino = parseInt( window.getComputedStyle(dino).getPropertyValue("top")
  )
  
  var leftCacto = parseInt( window.getComputedStyle(cacto).getPropertyValue("left")
  )
  if(leftCacto < 20 && leftCacto > 0 && topodino >= 130){
    dino.style.animation= "none"
    dino.style.display= "none"
   cacto.style.display= "none"

    alert("GAME OVER")
    alert(" F5 para reinicia !!" )
  }

  

},30)
