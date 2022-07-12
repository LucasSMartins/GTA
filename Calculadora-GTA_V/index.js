// getdropbox
const limpo = document.querySelector("#limpo");
const parceria = document.querySelector("#parceria");
const sujo = document.querySelector("#Sujo");
const sujoParceria = document.querySelector("#sujoParceria");
const tipo = document.querySelector("#tipo");
const b = document.querySelector("#b")



function calcular(un) {
      
      return un * 5000
}


function resultado() {
      let unKeycard = Number(document.querySelector("#Keycard").value);
      let unLockpick = Number(document.querySelector("#Lockpick").value);
      let unCapuz = Number(document.querySelector("#Capuz").value);
      let unAlgemas = Number(document.querySelector("#Algemas").value);
      let unColete = Number(document.querySelector("#Colete").value);
      let unPlaca = Number(document.querySelector("#Placa").value);
      let unPendrive = Number(document.querySelector("#Pendrive").value);
      let unC4 = Number(document.querySelector("#C4").value);
      let unMolas = Number(document.querySelector("#Molas").value);
      let unGatilhos = Number(document.querySelector("#Gatilhos").value);
      let unPlacadeMetal = Number(document.querySelector("#PlacadeMetal").value);

      b.innerHTML = ""
      b.innerHTML += `Keycard x${unKeycard}.....Total:${calcular(unKeycard).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      b.innerHTML += `Lockpick x${unLockpick}.....Total:${calcular(unLockpick).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      b.innerHTML += `Capuz x${unCapuz}.....Total:${calcular(unCapuz).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      b.innerHTML += `Algemas x${unAlgemas}.....Total:${calcular(unAlgemas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      b.innerHTML += `Colete x${unColete}.....Total:${calcular(unColete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      b.innerHTML += `Placa x${unPlaca}.....Total:${calcular(unPlaca).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      b.innerHTML += `Pendrive x${unPendrive}.....Total:${calcular(unPendrive).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      b.innerHTML += `C4 x${unC4}.....Total:${calcular(unC4).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      b.innerHTML += `Molas x${unMolas}.....Total:${calcular(unMolas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      b.innerHTML += `Gatilhos x${unGatilhos}.....Total:${calcular(unGatilhos).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      b.innerHTML += `PlacadeMetal x${unPlacadeMetal}.....Total:${calcular(unPlacadeMetal).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}.<br/><br/>`
}





function verificarTipo() {
  if (tipo == limpo) {
    alert("Limpo");
  } else if (tipo == parceria) {
    alert("Parceria");
  } else if (tipo == sujo) {
    alert("Sujo");
  } else if (tipo == sujoParceria) {
    alert("Sujo parceria");
  } else {
    alert("Deu tudo errado man");
  }
}
