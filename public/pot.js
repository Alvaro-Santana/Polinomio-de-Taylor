function calcular() {
    const b = parseFloat(document.getElementById("base").value);
    const e = parseFloat(document.getElementById("exp").value);

    document.getElementById("resultado").innerHTML =
        "Resultado: <strong>" + (b ** e) + "</strong>";
}
