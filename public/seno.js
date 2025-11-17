function perguntarUnidade() {
    const ang = document.getElementById("angulo").value;

    if (ang === "") {
        alert("Digite um valor primeiro!");
        return;
    }

    const tipo = confirm("O valor está em GRAUS? (OK = graus, Cancelar = radianos)");

    let x = parseFloat(ang);

    if (tipo) {
        x = x * (Math.PI / 180); // converte para rad
    }

    calcularTaylorSeno(x);
}

function calcularTaylorSeno(x) {
    const termo1 = x;
    const termo2 = -(Math.pow(x, 3) / 6);
    const termo3 = (Math.pow(x, 5) / 120);
    const termo4 = -(Math.pow(x, 7) / 5040);

    const taylor = termo1 + termo2 + termo3 + termo4;

    document.getElementById("resultado").innerHTML =
        "Resultado (Taylor ordem 7): <br><strong>" + taylor + "</strong>";
}
