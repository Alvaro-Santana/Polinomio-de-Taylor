function calcularLn() {
    const x = parseFloat(document.getElementById("valor").value);

    if (x <= 0) {
        alert("x deve ser maior que zero!");
        return;
    }

    document.getElementById("resultado").innerHTML =
        "Resultado: <br><strong>" + Math.log(x) + "</strong>";
}
