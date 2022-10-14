btn = document.querySelector("button");
btn.addEventListener("click", mostrar);

function mostrar() {
  let valor = document.getElementById("entrada").value;
  document.getElementById("mostrar").innerText = valor;
  document.getElementById("entrada").value = "";
  localStorage.setItem("dadoDoUsuario", valor);
}

document.querySelector("#mostar").innerText =
  localStorage.getItem("dadoDoUsuario");

let vetor = ["pera", "banana", "manga"];
sessionStorage.setItem("frutas", JSON.stringify(vetor));

let recuperaDado = JSON.parse(sessionStorage.getItem("frutas"));
recuperaDado.push("morango");

let strRecuperaDado = JSON.stringify(recuperaDado);
sessionStorage.setItem("frutas", strRecuperaDado);
console.log(strRecuperaDado);
