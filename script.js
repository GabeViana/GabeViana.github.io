// ========================================
// LISTA DE CERTIFICADOS
// ========================================

const certificados = [

    {
        nome: "Power BI",
        curso: "Introdução à Análise de Dados",
        instituicao: "Centro Educacional Comunitário",
        ano: "2026",
        arquivo: "power-bi"
    },

    {
        nome: "Rotinas Fiscais",
        curso: "Curso de rotinas fiscais no ERP",
        instituicao: "RP treinamentos",
        ano: "2026",
        arquivo: "rotinas-fiscais"
    },

    {
        nome: "Excel",
        curso: "Curso de Microsoft Excel",
        instituicao: "Santander Open Academy",
        ano: "2026",
        arquivo: "excel"
    }

];


// ========================================
// ELEMENTOS DA PÁGINA
// ========================================

const areaCertificados =
    document.getElementById("certificados");

const modal =
    document.getElementById("modal");

const fechar =
    document.getElementById("fechar");

const imagemAmpliada =
    document.getElementById("imagem-ampliada");

const botaoPdf =
    document.getElementById("botao-pdf");


// ========================================
// SEPARAR OS CERTIFICADOS POR ANO
// ========================================

const anos = [...new Set(
    certificados.map(function(certificado) {

        return certificado.ano;

    })
)];


// Mais recente primeiro

anos.sort(function(a, b) {

    return b - a;

});


// ========================================
// CRIAR OS GRUPOS
// ========================================

anos.forEach(function(ano) {

    const grupoAno =
        document.createElement("div");

    grupoAno.classList.add("grupo-ano");


    // Título do ano

    const tituloAno =
        document.createElement("h2");

    tituloAno.classList.add("titulo-ano");

    tituloAno.textContent = ano;


    // Grade dos certificados

    const grade =
        document.createElement("div");

    grade.classList.add("grade-certificados");


    // Pegar certificados daquele ano

    const certificadosDoAno =
        certificados.filter(function(certificado) {

            return certificado.ano === ano;

        });


    // ========================================
    // CRIAR OS CARDS
    // ========================================

    certificadosDoAno.forEach(function(certificado) {

        const card =
            document.createElement("div");

        card.classList.add("certificado");


        // Caminho da imagem

        const caminhoImagem =
            "certificados/" +
            certificado.arquivo +
            ".png";


        // Caminho do PDF

        const caminhoPdf =
            "certificados/" +
            certificado.arquivo +
            ".pdf";


        card.innerHTML = `

            <div class="imagem-certificado">

                <img
                    src="${caminhoImagem}"
                    alt="Certificado de ${certificado.nome}"
                >

            </div>

            <h2>
                ${certificado.nome}
            </h2>

            <p>
                ${certificado.curso}
            </p>

            <small>
                ${certificado.instituicao}
            </small>

            <small>
                ${certificado.ano}
            </small>

        `;


        // ========================================
        // ABRIR CERTIFICADO
        // ========================================

        card.addEventListener("click", function() {

            imagemAmpliada.src =
                caminhoImagem;

            imagemAmpliada.alt =
                "Certificado de " +
                certificado.nome;

            botaoPdf.href =
                caminhoPdf;

            modal.classList.add("ativo");

        });


        grade.appendChild(card);

    });


    grupoAno.appendChild(tituloAno);

    grupoAno.appendChild(grade);

    areaCertificados.appendChild(grupoAno);

});


// ========================================
// FECHAR MODAL
// ========================================

fechar.addEventListener("click", function() {

    modal.classList.remove("ativo");

});


// ========================================
// FECHAR CLICANDO FORA
// ========================================

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.classList.remove("ativo");

    }

});