function calcular(unidade, preco) {
  /*const total = {
    totalKeycard: unidade.unKeycard * preco.Keycard,
    totalLockpick: unidade.unLockpick * preco.Lockpick,
    totalCapuz: unidade.unCapuz * preco.Capuz,
    totalAlgemas: unidade.unAlgemas * preco.Algemas,
    totalColete: unidade.unColete * preco.Colete,
    totalPlaca: unidade.unPlaca * preco.Placa,
    totalPendrive: unidade.unPendrive * preco.Pendrive,
    totalC4: unidade.unC4 * preco.C4,
    totalMolas: unidade.unMolas * preco.Molas,
    totalGatilhos: unidade.unGatilhos * preco.Gatilhos,
    totalPlacadeMetal: unidade.unPlacadeMetal * preco.PlacadeMetal,
  };

  return total;*/
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
    (totalPlacaMetal = unidade.PlacaMetal * preco.PlacaMetal),
  ];
  return total;
}

const resultado = (preco) => {
  const c = document.querySelector("#c");
  const d = document.querySelector("#d");

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
  ];
  /*
  const item = {
    Keycard: "Keycard",
    Lockpick: "Lockpick",
    Capuz: "Capuz",
    Algemas: "Algemas",
    Colete: "Colete",
    Placa: "Placa",
    Pendrive: "Pendrive",
    C4: "C4",
    Molas: "Molas",
    Gatilhos: "Gatilhos",
    PlacadeMetal: "Placa de Metal",
  };
  */

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
  ];

  const valor = calcular(unidade, preco);
  console.log(valor); //teste

  /*c.innerHTML = "";
  Object.keys(item).forEach((i) => {
    c.innerHTML += `${item[i]}<br/>`;
  });*/
  c.innerHTML = "";
  d.innerHTML = "";
  Object.keys(valor).forEach((i) => {
    if (valor[i] == 0) {
      c.innerHTML += "";
      d.innerHTML += "";
    } else {
      c.innerHTML += `${item[i]}   x${uni[i]} un<br/>`;
      d.innerHTML += `${valor[i].toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}<br/>`;
    }
  });

  let valorTotal = 0;
  for (let i = 0; i <= valor.length; i++) {
    console.log(valor[i]);//teste
    valorTotal += valor[i];
    console.log(valorTotal);//teste
  }

  c.innerHTML += `Valor total: `;
  d.innerHTML += `${valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;
};

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
      Molas: 916500,
      Gatilhos: 1098500,
      PlacaMetal: 1020500,
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
      Molas: 916500,
      Gatilhos: 1098500,
      PlacaMetal: 1020500,
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
      Molas: 916500,
      Gatilhos: 1098500,
      PlacaMetal: 1020500,
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
      Molas: 916500,
      Gatilhos: 1098500,
      PlacaMetal: 1020500,
    };
    resultado(preco);
  } else {
    alert("Deu tudo errado man");
  }
}
