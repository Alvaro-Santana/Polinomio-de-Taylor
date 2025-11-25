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

    calcularTaylorCosseno(xRad);
}

function calcularTaylorCosseno(x) {
    const termo1 = 1;
    const termo2 = -(Math.pow(x, 2) / 2);
    const termo3 = (Math.pow(x, 4) / 24);
    const termo4 = -(Math.pow(x, 6) / 720);

    const resultado = termo1 + termo2 + termo3 + termo4;

    document.getElementById("resultado").innerHTML =
        "Resultado (Taylor ordem 7):<br><strong>" + resultado + "</strong>";
}
