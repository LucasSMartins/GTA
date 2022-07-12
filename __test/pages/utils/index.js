// getdropbox
// const limpo = document.querySelector("#limpo");
// const parceria = document.querySelector("#parceria");
// const sujo = document.querySelector("sujo");
// const sujoParceria = document.querySelector("#sujoParceria");
// const tipo = document.document.querySelector("tipo");
const c = document.querySelector("#c")

function calcular(un, preco) {
  
  return un * preco
  
}

function resultado(preco) {
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

      c.innerHTML = ""
      c.innerHTML += `Keycard x${unKeycard}.....Total:${calcular(unKeycard, preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      c.innerHTML += `Lockpick x${unLockpick}.....Total:${calcular(unLockpick, preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      c.innerHTML += `Capuz x${unCapuz}.....Total:${calcular(unCapuz, preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      c.innerHTML += `Algemas x${unAlgemas}.....Total:${calcular(unAlgemas, preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      c.innerHTML += `Colete x${unColete}.....Total:${calcular(unColete, preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      c.innerHTML += `Placa x${unPlaca}.....Total:${calcular(unPlaca, preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      c.innerHTML += `Pendrive x${unPendrive}.....Total:${calcular(unPendrive, preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      c.innerHTML += `C4 x${unC4}.....Total:${calcular(unC4, preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      c.innerHTML += `Molas x${unMolas}.....Total:${calcular(unMolas, preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      c.innerHTML += `Gatilhos x${unGatilhos}.....Total:${calcular(unGatilhos, preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/>`
      c.innerHTML += `PlacadeMetal x${unPlacadeMetal}.....Total:${calcular(unPlacadeMetal, preco).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}.<br/><br/>`
}

function verificarTipo() {

  const tipo = document.getElementById("tipo").value; 

  // console.log(tipo)

  if (tipo == "limpo") {
    // alert("Limpo");
    let preco = 5000;
    resultado(preco)

  } else if (tipo == "parceria") {
    //alert("Parceria");
    let preco = 2000;
    resultado(preco)
  } else if (tipo == "sujo") {
    //alert("Sujo");
    let preco = 5000;
    resultado(preco)
  } else if (tipo == "sujoParceria") {
    //alert("Sujo parceria");
    let preco = 5000;
    resultado(preco)
  } else {
    alert("Deu tudo errado man");
  }
}
