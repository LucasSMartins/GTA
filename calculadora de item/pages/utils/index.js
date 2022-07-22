import preco from "./dados/preco.json"

function verificarTipo() {
  const tipo = document.getElementById("tipo").value;

  if (tipo == "limpo") {
    resultado(preco.precoLimpo);    
  } else if (tipo == "parceria") {
    resultado(preco.precoParceria);
  } else if (tipo == "sujo") {
    resultado(preco.precoSujo);
  } else if (tipo == "sujoParceria") {
    resultado(preco.precoSujoParceria);
  } else {
    alert("Deu tudo errado man");
  }
}

function calcular(unidade, preco) {
  const total = [
    (totalKeycard = unidade.unKeycard * preco.Keycard),
    (totalLockpick = unidade.unLockpick * preco.Lockpick),
    (totalCapuz = unidade.unCapuz * preco.Capuz),
    (totalAlgemas = unidade.unAlgemas * preco.Algemas),
    (totalColete = unidade.unColete * preco.Colete),
    (totalPlaca = unidade.unPlaca * preco.Placa),
    (totalPendrive = unidade.unPendrive * preco.Pendrive),
    (totalCQuatro = unidade.unC4 * preco.CQuatro),
    (totalMolas = unidade.unMolas * preco.Molas),
    (totalGatilhos = unidade.unGatilhos * preco.Gatilhos),
    (totalPlacaMetal = unidade.unPlacadeMetal * preco.PlacaMetal),
    (totalkitPistola = unidade.unkitPistola * preco.kitPistola),
    (totalkitFuzil = unidade.unkitFuzil * preco.kitFuzil),
  ]; 
  return total;
}

const calcularCusto = (unidade, preco) => {
  const custoTotal = [
    custoTotalKitPistola = unidade.unkitPistola * preco.custoKitPistola,
    custoTotalKitFuzil = unidade.unkitFuzil * preco.custoKitFuzil
  ]
  return custoTotal
}




const resultado = (preco) => {
  const c = document.querySelector("#c");
  const d = document.querySelector("#d");
  const e = document.querySelector("#e");
  const f = document.querySelector("#f");
  const h3custo = document.querySelector("#h3custo");

  const unidade = {
    unKeycard: Number(document.querySelector("#Keycard").value),
    unLockpick: Number(document.querySelector("#Lockpick").value),
    unCapuz: Number(document.querySelector("#Capuz").value),
    unAlgemas: Number(document.querySelector("#Algemas").value),
    unColete: Number(document.querySelector("#Colete").value),
    unPlaca: Number(document.querySelector("#Placa").value),
    unPendrive: Number(document.querySelector("#Pendrive").value),
    unC4: Number(document.querySelector("#C4").value),
    unMolas: Number(document.querySelector("#Molas").value),
    unGatilhos: Number(document.querySelector("#Gatilhos").value),
    unPlacadeMetal: Number(document.querySelector("#PlacadeMetal").value),
    unkitPistola: Number(document.querySelector("#kitPistola").value),
    unkitFuzil: Number(document.querySelector("#kitFuzil").value),
  };

  const uni = [
    (unKeycard = Number(document.querySelector("#Keycard").value)),
    (unLockpick = Number(document.querySelector("#Lockpick").value)),
    (unCapuz = Number(document.querySelector("#Capuz").value)),
    (unAlgemas = Number(document.querySelector("#Algemas").value)),
    (unColete = Number(document.querySelector("#Colete").value)),
    (unPlaca = Number(document.querySelector("#Placa").value)),
    (unPendrive = Number(document.querySelector("#Pendrive").value)),
    (unC4 = Number(document.querySelector("#C4").value)),
    (unMolas = Number(document.querySelector("#Molas").value)),
    (unGatilhos = Number(document.querySelector("#Gatilhos").value)),
    (unPlacadeMetal = Number(document.querySelector("#PlacadeMetal").value)),
    (unkitPistola = Number(document.querySelector("#kitPistola").value)),
    (unkitFuzil = Number(document.querySelector("#kitFuzil").value)),
  ];


  const item = [
    "Keycard",
    "Lockpick",
    "Capuz",
    "Algemas",
    "Colete",
    "Placa",
    "Pendrive",
    "C4",
    "Molas",
    "Gatilhos",
    "Placa de Metal",
    "kit de Pistola",
    "kit de Fuzil",
  ];



  const total = calcular(unidade, preco);
  

  c.innerHTML = "";
  d.innerHTML = "";
  for (let i = 0; i < total.length; i++) {
    if (total[i] == 0) {
      c.innerHTML += "";
      d.innerHTML += "";
    } else {
      c.innerHTML += `${item[i]}   x${uni[i]} un<br/>`;
      d.innerHTML += `${total[i].toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}<br/>`;
    }
  }

  let valorTotal = 0;
  for (let i = 0; i < total.length; i++) {
    valorTotal += total[i];
  }

  c.innerHTML += `Valor total: `;
  d.innerHTML += `${valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}<br/>`;



  //====================== CUSTO DE PEÇAS ==============================


  const custoTotal = calcularCusto(unidade, preco);
  console.log(custoTotal) // teste 
  const custoItem = [
    "kit de Pistola",
    "kit de Fuzil",
  ]
  const custoUni = [
    (unkitPistola = Number(document.querySelector("#kitPistola").value)),
    (unkitFuzil = Number(document.querySelector("#kitFuzil").value))
  ]

  e.innerHTML = "";
  f.innerHTML = "";
  for (let i = 0; i < custoTotal.length; i++){
    if (custoTotal[i] == 0) {
      e.innerHTML += "";
      f.innerHTML += "";
      h3custo.innerHTML = `` 
    } else {
      h3custo.innerHTML = `Custo dos Kits` 
      e.innerHTML += `${custoItem[i]}   x${custoUni[i]} un<br/> `;
      f.innerHTML += `${custoTotal[i].toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}<br/>`;
    }
  }
};

