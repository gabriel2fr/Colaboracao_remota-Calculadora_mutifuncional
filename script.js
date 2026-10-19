function Somar() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let resultado = numero1 + numero2;
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function Subtrair() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let resultado = numero1 - numero2;
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function Multiplicar() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let resultado = numero1 * numero2;
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function Divisao() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  if (numero2 === 0) {
    document.getElementById("resultado").innerHTML =
      "Resultado: Erro (Divisão por zero)";
    return;
  }
  let resultado = numero1 / numero2;
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function Porcentagem() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let resultado = numero1 * (numero2 / 100);
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function Potencia() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value); // Número 2 vira o expoente
  let resultado = Math.pow(numero1, numero2);
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function RaizQuadrada() {
  let numero1 = Number(document.getElementById("numero1").value);
  if (numero1 < 0) {
    document.getElementById("resultado").innerHTML =
      "Resultado: Erro (Raiz de número negativo)";
    return;
  }
  let resultado = Math.sqrt(numero1);
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function Fatorial() {
  let numero1 = Number(document.getElementById("numero1").value);
  if (numero1 < 0 || !Number.isInteger(numero1)) {
    document.getElementById("resultado").innerHTML =
      "Resultado: Erro (Apenas inteiros positivos)";
    return;
  }
  let resultado = 1;
  for (let i = 2; i <= numero1; i++) {
    resultado *= i;
  }
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function Logaritmo() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = document.getElementById("numero2").value; // Base opcional

  if (numero1 <= 0) {
    document.getElementById("resultado").innerHTML =
      "Resultado: Erro (Log de número inválido)";
    return;
  }

  let resultado;
  if (numero2 === "" || Number(numero2) === 0) {
    resultado = Math.log(numero1); // Se o campo 2 estiver vazio, faz Logaritmo Natural (ln)
    document.getElementById("resultado").innerHTML =
      "Resultado (ln): " + resultado;
  } else {
    let base = Number(numero2);
    if (base <= 0 || base === 1) {
      document.getElementById("resultado").innerHTML =
        "Resultado: Erro (Base inválida)";
      return;
    }
    resultado = Math.log(numero1) / Math.log(base); // Mudança de base para log customizado
    document.getElementById("resultado").innerHTML =
      `Resultado (log na base ${base}): ` + resultado;
  }
}

function Seno() {
  let numero1 = Number(document.getElementById("numero1").value);
  let radianos = numero1 * (Math.PI / 180);
  let resultado = Math.sin(radianos);
  document.getElementById("resultado").innerHTML =
    "Resultado: " + resultado.toFixed(6);
}

function Cosseno() {
  let numero1 = Number(document.getElementById("numero1").value);
  let radianos = numero1 * (Math.PI / 180);
  let resultado = Math.cos(radianos);
  document.getElementById("resultado").innerHTML =
    "Resultado: " + resultado.toFixed(6);
}

function Tangente() {
  let numero1 = Number(document.getElementById("numero1").value);
  if (Math.abs(numero1 % 180) === 90) {
    document.getElementById("resultado").innerHTML =
      "Resultado: Erro (Tangente indefinida)";
    return;
  }
  let radianos = numero1 * (Math.PI / 180);
  let resultado = Math.tan(radianos);
  document.getElementById("resultado").innerHTML =
    "Resultado: " + resultado.toFixed(6);
}
