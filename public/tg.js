
function reduzirGrausSeNecessario(graus) {
    if (Math.abs(graus) > 360) return graus % 360;
    return graus;
}

function senoTaylor7(x) {
    x = reducir(x);
    const r = x * (Math.PI / 180);
    return r - r ** 3 / 6 + r ** 5 / 120 - r ** 7 / 5040;
}

function cosTaylor7(x) {
    x = reducir(x);
    const r = x * (Math.PI / 180);
    return 1 - r ** 2 / 2 + r ** 4 / 24 - r ** 6 / 720;
}

function reducir(x) {
    if (Math.abs(x) > 360) return x % 360;
    return x;
}

function tanTaylor7(graus) {
    graus = reducir(graus);
    return senoTaylor7(graus) / cosTaylor7(graus);
}

function tanNormal(graus) {
    graus = reducir(graus);
    return Math.tan(graus * Math.PI / 180);
}

function calcularTan() {
    let entrada = parseFloat(document.getElementById("valor").value);

    const resultadoTaylor = tanTaylor7(entrada);
    const resultadoNormal = tanNormal(entrada);

    document.getElementById("resultado").innerHTML =
        `<p><b>Taylor(7):</b> ${resultadoTaylor}</p>
         <p><b>Math.tan:</b> ${resultadoNormal}</p>`;
}
