function perguntarUnidade() {
    const ang = document.getElementById("angulo").value;

    if (ang === "") {
        alert("Digite um valor!");
        return;
    }

    const isGrau = confirm("O valor está em GRAUS? (OK = graus, Cancelar = radianos)");

    let x = parseFloat(ang);
    let xRad = 0;

    if (isGrau) {
        xRad = x * (Math.PI / 180);
    } else {
        const grauReducao = ((x * 100) % (2 * Math.PI * 100)) / 100;
        xRad = grauReducao * (Math.PI / 180);
    }

    calcularTaylorTangente(xRad);
}

function taylorSeno(x) {
    return x
        - (Math.pow(x, 3) / 6)
        + (Math.pow(x, 5) / 120)
        - (Math.pow(x, 7) / 5040);
}

function taylorCosseno(x) {
    return 1
        - (Math.pow(x, 2) / 2)
        + (Math.pow(x, 4) / 24)
        - (Math.pow(x, 6) / 720);
}

function calcularTaylorTangente(x) {
    const seno = taylorSeno(x);
    const cosseno = taylorCosseno(x);

    const resultado = seno / cosseno;

    document.getElementById("resultado").innerHTML =
        "Resultado (Taylor ordem 7):<br><strong>" + resultado + "</strong>";
}
