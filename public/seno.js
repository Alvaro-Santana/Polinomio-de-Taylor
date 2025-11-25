function taylorSin(x) {
    // 1) Redução de ângulo (mantém precisão)
    x = x % (2 * Math.PI);

    // 2) Melhor redução: deixa o ângulo dentro de -PI/2 a PI/2
    if (x > Math.PI / 2) {
        x = Math.PI - x;
    } else if (x < -Math.PI / 2) {
        x = -Math.PI - x;
    }

    // 3) Polinômio de Taylor de ordem 7 para seno
    const x2 = x * x;
    return x
        - (x * x2) / 6
        + (x * x2 * x2) / 120
        - (x * x2 * x2 * x2) / 5040;
}

function senoEntrada(valor) {
    let rad;

    if (valor > 2 * Math.PI) {
        rad = valor * (Math.PI / 180); // graus → radianos
    } else {
        rad = valor; // radianos direto
    }

    return taylorSin(rad);
}

