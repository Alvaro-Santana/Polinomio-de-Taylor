function perguntarUnidade() {
    const ang = document.getElementById("angulo").value;

    if (ang === "") {
        alert("Digite um valor primeiro!");
        return;
    }

    const tipo = confirm("O valor está em GRAUS? (OK = graus, Cancelar = radianos)");

    let x = parseFloat(ang);

    if (tipo) 
        x = x * (Math.PI / 180);

    calcularTangente(x);
}

function taylorSeno(x) {
    return x
        - (Math.pow(x, 3) / 6)
        + (Math.pow(x, 5) / 120)
        - (Math.pow(x, 7) / 5040);
}

function taylorCos(x) {
    return 1
        - (Math.pow(x, 2) / 2)
        + (Math.pow(x, 4) / 24)
        - (Math.pow(x, 6) / 720);
}

function calcularTangente(x) {
    const seno = taylorSeno(x);
    const cos = taylorCos(x);

    const tan = seno / cos;

    document.getElementById("resultado").innerHTML =
        "Resultado (Taylor ordem 7): <br><strong>" + tan + "</strong>";
}
