
function reduzirGrausSeNecessario(graus) {
    if (Math.abs(graus) > 360) return graus % 360; 
    return graus;
}

function cosTaylor7(graus) {
    graus = reduzirGrausSeNecessario(graus);
    const x = graus * (Math.PI / 180);

    return (
        1
        - (x ** 2) / 2
        + (x ** 4) / 24
        - (x ** 6) / 720
    );
}

function cosNormal(graus) {
    graus = reduzirGrausSeNecessario(graus);
    return Math.cos(graus * Math.PI / 180);
}

// ===========================================================
function calcularCos() {
    let entrada = parseFloat(document.getElementById("valor").value);

    const resultadoTaylor = cosTaylor7(entrada);
    const resultadoNormal = cosNormal(entrada);

    document.getElementById("resultado").innerHTML =
        `<p><b>Taylor(7):</b> ${resultadoTaylor}</p>
         <p><b>Math.cos:</b> ${resultadoNormal}</p>`;
}
