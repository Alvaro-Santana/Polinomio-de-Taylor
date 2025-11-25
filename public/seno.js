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

            // Converter grau pela fórmula padrao que você aprovou
            xGraus = xRad * (180 / Math.PI);

            // Voltar para radiano
            xRad = xGraus * (Math.PI / 180);
        } 
        
        // Caso 2: Valor grande → usar sua fórmula especial
        else {

            // SUA fórmula:
            // (x * 100) % (2π * 100) / 100
            let reduzido = ((x * 100) % (2 * Math.PI * 100)) / 100;

            // reduzido já é o valor que vira GRAUS
            xGraus = reduzido;

            // Converter para radiano para o polinômio
            xRad = xGraus * (Math.PI / 180);
        }
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
