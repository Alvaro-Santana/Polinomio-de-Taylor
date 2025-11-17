function calcularRaiz() {
    const n = parseFloat(document.getElementById("indice").value);
    const x = parseFloat(document.getElementById("valor").value);

    const resultado = Math.pow(x, 1 / n);

    document.getElementById("resultado").innerHTML =
        "Resultado: <strong>" + resultado + "</strong>";
}
