function calcularEuler() {
    const x = parseFloat(document.getElementById("valorX").value);

    if (isNaN(x)) {
        alert("Digite um valor válido!");
        return;
    }

    // Série de Taylor até ordem 7
    const termo0 = 1;
    const termo1 = x;
    const termo2 = Math.pow(x, 2) / 2;
    const termo3 = Math.pow(x, 3) / 6;
    const termo4 = Math.pow(x, 4) / 24;
    const termo5 = Math.pow(x, 5) / 120;
    const termo6 = Math.pow(x, 6) / 720;
    const termo7 = Math.pow(x, 7) / 5040;

    const resultado =
        termo0 + termo1 + termo2 + termo3 + termo4 + termo5 + termo6 + termo7;

    document.getElementById("resultado").innerHTML =
        `Resultado (Taylor ordem 7): <br><strong>${resultado}</strong>`;
}
