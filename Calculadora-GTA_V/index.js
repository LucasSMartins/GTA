
// const limpo = document.querySelector("#limpo");
// const parceria = document.querySelector("#parceria");
// const sujo = document.querySelector("sujo");
// const sujoParceria = document.querySelector("#sujoParceria");
// const tipo = document.document.querySelector("tipo");


function calcular(un, preco) {
  const valores = []

  for (let item in preco) {

    valores[item] = un * preco[item]
    console.log(valores[item])
  }

}



function resultado(preco) {
  const c = document.querySelector("#c")
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
  c.innerHTML += `PlacadeMetal x${unPlacadeMetal}.....Total:${calcular(unPlacadeMetal, preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.<br/><br/>`
}

function verificarTipo() {
  const tipo = document.getElementById("tipo").value;

  if (tipo == "limpo") {
    let preco = {
      keycard: 5000,
      Lockpick: 20000,
      Capuz: 20000,
      Algemas: 20000,
      Colete: 35000,
      Placa: 40000,
      Pendrive: 40000,
      C4: 50000,
    }
    resultado(preco)
  } else if (tipo == "parceria") {
    let preco = {
      keycard: 5000,
      Lockpick: 15000,
      Capuz: 15000,
      Algemas: 15000,
      Colete: 25000,
      Placa: 30000,
      Pendrive: 30000,
      C4: 40000,
    }
    resultado(preco)
  } else if (tipo == "sujo") {
    let preco = {
      keycard: 5000,
      Lockpick: 35000,
      Capuz: 35000,
      Algemas: 35000,
      Colete: 55000,
      Placa: 60000,
      Pendrive: 60000,
      C4: 80000,
    }
    resultado(preco)
  } else if (tipo == "sujoParceria") {
    let preco = {
      keycard: 5000,
      Lockpick: 25000,
      Capuz: 25000,
      Algemas: 25000,
      Colete: 40000,
      Placa: 50000,
      Pendrive: 50000,
      C4: 70000,
    }
    resultado(preco)
  } else {
    alert("Deu tudo errado man");
  }
}
