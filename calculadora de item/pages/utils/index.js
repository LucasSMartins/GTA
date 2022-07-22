function verificarTipo() {
  const tipo = document.getElementById("tipo").value;

  if (tipo == "limpo") {
    const preco = {
      Keycard: 5000,
      Lockpick: 20000,
      Capuz: 20000,
      Algemas: 20000,
      Colete: 35000,
      Placa: 40000,
      Pendrive: 40000,
      CQuatro: 50000,
      Molas: 9165,
      Gatilhos: 10985,
      PlacaMetal: 10205,
      kitPistola: 41600,
      kitFuzil: 59930,
      custoKitPistola:32000,
      custoKitFuzil:46100,
      
    };
    resultado(preco);
  } else if (tipo == "parceria") {
    const preco = {
      Keycard: 5000,
      Lockpick: 15000,
      Capuz: 15000,
      Algemas: 15000,
      Colete: 25000,
      Placa: 30000,
      Pendrive: 30000,
      CQuatro: 40000,
      Molas: 9165,
      Gatilhos: 10985,
      PlacaMetal: 10205,
      kitPistola: 41600,
      kitFuzil: 59930,
      custoKitPistola:32000,
      custoKitFuzil:13830,
    };
    resultado(preco);
  } else if (tipo == "sujo") {
    const preco = {
      Keycard: 5000,
      Lockpick: 35000,
      Capuz: 35000,
      Algemas: 35000,
      Colete: 55000,
      Placa: 60000,
      Pendrive: 60000,
      CQuatro: 80000,
      Molas: 9165,
      Gatilhos: 10985,
      PlacaMetal: 10205,
      kitPistola: 41600,
      kitFuzil: 59930,
      custoKitPistola:32000,
      custoKitFuzil:13830,
    };
    resultado(preco);
  } else if (tipo == "sujoParceria") {
    const preco = {
      Keycard: 5000,
      Lockpick: 25000,
      Capuz: 25000,
      Algemas: 25000,
      Colete: 40000,
      Placa: 50000,
      Pendrive: 50000,
      CQuatro: 70000,
      Molas: 9165,
      Gatilhos: 10985,
      PlacaMetal: 10205,
      kitPistola: 41600,
      kitFuzil: 59930,
      custoKitPistola:32000,
      custoKitFuzil:13830,
    };
    resultado(preco);
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

  const custoUni = [
    (unkitPistola = Number(document.querySelector("#kitPistola").value)),
    (unkitFuzil = Number(document.querySelector("#kitFuzil").value)),
  ]

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

  const custoItem = [
    "kit de Pistola",
    "kit de Fuzil",
  ]

  const total = calcular(unidade, preco);
  const custoTotal = calcularCusto(unidade, preco);

  console.log(custoTotal)

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

  for (let i = 0; i < custoTotal.length; i++){

    if (custoTotal[i] == 0) {
      e.innerHTML += "";
      f.innerHTML += "";
    } else {
      e.innerHTML += `${custoItem[i]}   x${custoUni[i]} un<br/> `;
      f.innerHTML += `${custoTotal[i].toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}<br/>`;
      if (i = 0) {
        if (custoTotal[0] || custoTotal[1] != 0) {
          h3custo.innerHTML += `Custo dos Kits`  
         }  
      }
      
    }
  }
  


  




};




