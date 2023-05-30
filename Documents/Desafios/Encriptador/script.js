
    const matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];

    function encriptar() {
      const texto = document.getElementById("texto").value;
      let resultado = "";

      for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        const codificado = matrizCodigo.find(([l]) => l === letra);
        if (codificado) {
          resultado += codificado[1];
        } else {
          resultado += letra;
        }
      }

      document.getElementById("resultado").value = resultado;
    }

    function desencriptar() {
      const texto = document.getElementById("resultado").value;
      let resultado = "";

      let i = 0;
      while (i < texto.length) {
        let encontrado = false;

        for (const [letra, codificado] of matrizCodigo) {
          if (texto.substring(i, i + codificado.length) === codificado) {
            resultado += letra;
            i += codificado.length;
            encontrado = true;
            break;
          }
        }

        if (!encontrado) {
          resultado += texto[i];
          i++;
        }
      }

      document.getElementById("texto").value = "";
      document.getElementById("resultado").value = resultado;
    }

    function copiar() {
      const resultado = document.getElementById("resultado").value;
      navigator.clipboard.writeText(resultado)
        .then(() => {
          alert("Texto copiado al portapapeles: " + resultado);
        })
        .catch(() => {
          alert("Error al copiar el texto");
        });
    }
