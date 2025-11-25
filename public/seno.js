function reduzir(g) {
    if (Math.abs(g) > 360) return g % 360;
    return g;
}

function radianoParaGrau(r) {
    return r * (180 / Math.PI);
}

function senoTaylor7(g) {
    g = reduzir(g);
    const x = g * (Math.PI / 180);
    return x - x**3/6 + x**5/120 - x**7/5040;
}

function senoNormal(g) {
    g = reduzir(g);
    return Math.sin(g * Math.PI / 180);
}

function calcularSeno() {
    let val = parseFloat(document.getElementById("valor").value);
    if (isNaN(val)) { alert("Valor inválido"); return; }
    let rad = confirm("O valor está em RADIANOS? OK=Sim / Cancelar=Não");
    if (rad) val = radianoParaGrau(val);
    let t = senoTaylor7(val);
    let n = senoNormal(val);
    document.getElementById("resultado").innerHTML =
        `<p>Seno Taylor(7): ${t}</p><p>Seno Math.sin: ${n}</p>`;
}
