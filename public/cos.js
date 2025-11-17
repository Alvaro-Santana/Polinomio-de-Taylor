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

    calcularTaylorCoseno(x);
}

function calcularTaylorCoseno(x) {
    const termo1 = 1;
    const termo2 = -(Math.pow(x, 2) / 2);
    const termo3 = (Math.pow(x, 4) / 24);
    const termo4 = -(Math.pow(x, 6) / 720);

    const taylor = termo1 + termo2 + termo3 + termo4;

    document.getElementById("resultado").innerHTML =
        "Resultado (Taylor ordem 7): <br><strong>" + taylor + "</strong>";
}
