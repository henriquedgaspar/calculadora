function atualizarCampos() {
    const figura = document.getElementById("figura").value;
    const campoAltura = document.getElementById("campoAltura");
    const labelBase = document.getElementById("labelBase");

    // Círculo e quadrado precisam de apenas uma medida.
    campoAltura.hidden = figura === "circulo" || figura === "quadrado";

    if (figura === "circulo") {
        labelBase.textContent = "Raio (cm):";
    } else if (figura === "quadrado") {
        labelBase.textContent = "Lado (cm):";
    } else {
        labelBase.textContent = "Base (cm):";
    }

    document.getElementById("resultado").textContent = "";
}

function calcularArea() {
    const figura = document.getElementById("figura").value;
    const medida = Number(document.getElementById("base").value);
    const altura = Number(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

    if (document.getElementById("base").value.trim() === "" ||
        medida <= 0 || !Number.isFinite(medida)) {
        resultado.textContent = "Digite uma medida válida maior que zero!";
        return;
    }

    let area;
    let nomeFigura;

    if (figura === "quadrado") {
        area = medida * medida;
        nomeFigura = "quadrado";
    } else if (figura === "circulo") {
        area = Math.PI * medida * medida;
        nomeFigura = "círculo";
    } else {
        if (document.getElementById("altura").value.trim() === "" ||
            altura <= 0 || !Number.isFinite(altura)) {
            resultado.textContent = "Digite uma altura válida maior que zero!";
            return;
        }

        if (figura === "retangulo") {
            area = medida * altura;
            nomeFigura = "retângulo";
        } else {
            area = (medida * altura) / 2;
            nomeFigura = "triângulo";
        }
    }

    resultado.textContent =
        "A área do " + nomeFigura + " é " + area.toFixed(2) + " cm².";
}
