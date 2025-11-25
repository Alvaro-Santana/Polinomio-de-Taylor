function perguntarUnidade() {
    let v = document.getElementById("valor").value.replace(",", ".");
    let num = parseFloat(v);

    if (isNaN(num)) {
        document.getElementById("resultado").innerText = "Valor inválido";
        return;
    }

    let tipo = confirm("OK = radiano | CANCELAR = grau");
    let angulo;

    if (tipo) {
        let rad = num;
        if (Math.abs(rad) > 6.28) rad = (rad % (2 * Math.PI * 100)) / 100;
        angulo = rad * (180 / Math.PI);
    } else {
        angulo = num;
    }

    let x = angulo * (Math.PI / 180);

    let s = x - x**3/6 + x**5/120 - x**7/5040;

    document.getElementById("resultado").innerText = s;
}
