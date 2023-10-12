
        const btn = document.querySelector('.btn')
        var msg = document.getElementById('msg')
let numero = (min, max) => {
    let numeroAleatorio = Math.random() * (200 - 0) + 0
    return numeroAleatorio.toFixed()
}
console.log(numero())

      btn.addEventListener('click', () => {
          
      
      fetch(`https://api.adviceslip.com/advice/${numero()}`).then((r) => r.json()).then((data) =>{
    let menssagem = data.slip

  
            msg.innerText = menssagem.advice

    console.log(menssagem.advice)
})
      
        })
         



