function perguntarUnidade() {
    const ang = document.getElementById("angulo").value;

    if (ang === "") {
        alert("Digite um valor!");
        return;
    }

    const isGrau = confirm("O valor está em GRAUS? (OK = graus, Cancelar = radianos)");
    let x = parseFloat(ang);
    let xRad, xGraus;

    const doisPi = 2 * Math.PI;

    if (isGrau) {
        // GRAUS → RAD
        xRad = x * (Math.PI / 180);
    } else {
        // RADIANOS

        // Caso 1: Valor pequeno → usar direto
        if (Math.abs(x) <= doisPi) {
            xRad = x;
        } 
        
        // Caso 2: Valor grande → reduzir
        else {
            xRad = x % doisPi;
        }

        // Agora CONVERTER SEMPRE PARA GRAUS
        xGraus = xRad * (180 / Math.PI);

        // E CONVERTER DE VOLTA PARA RAD
        xRad = xGraus * (Math.PI / 180);
    }

    calcularTaylorSeno(xRad);
}

function calcularTaylorSeno(x) {
    const termo1 = x;
    const termo2 = -(Math.pow(x, 3) / 6);
    const termo3 = (Math.pow(x, 5) / 120);
    const termo4 = -(Math.pow(x, 7) / 5040);

    const resultado = termo1 + termo2 + termo3 + termo4;

    document.getElementById("resultado").innerHTML =
        "Resultado (Taylor ordem 7):<br><strong>" + resultado + "</strong>";
}
