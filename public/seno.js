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
        // GRAUS → RAD
        xRad = x * (Math.PI / 180);
    } else {
        // RADIANOS
        const doisPi = 2 * Math.PI;

        if (Math.abs(x) <= doisPi) {
            // Pequeno → NÃO REDUZ
            xRad = x;
        } else {
            // Grande → REDUZ
            xRad = x % doisPi;
        }
    }

    calcularTaylorSeno(xRad);
}
