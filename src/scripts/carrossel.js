document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleciona TODOS os elementos com a classe .carrossel na página
    const carrosseis = document.querySelectorAll('.carrossel');

    // 2. Para cada carrossel encontrado, aplicamos a lógica independentemente
    carrosseis.forEach((carrossel) => {

        // Busca os elementos DENTRO deste carrossel específico
        const slides = carrossel.querySelector('.slides');
        const imagens = carrossel.querySelectorAll('.slides img');
        const btnEsq = carrossel.querySelector('.esquerda');
        const btnDir = carrossel.querySelector('.direita');

        // Segurança: Se faltar alguma peça nesse carrossel, pula para o próximo
        if (!slides || imagens.length === 0 || !btnEsq || !btnDir) return;

        let index = 0;
        let intervalo;

        // Função interna para mover ESTE carrossel específico
        const mostrarSlide = () => {
            const larguraSlide = slides.clientWidth;
            slides.style.transform = `translateX(${-index * larguraSlide}px)`;
        };

        // Função para ir para o próximo
        const proximoSlide = () => {
            index++;
            if (index >= imagens.length) {
                index = 0;
            }
            mostrarSlide();
        };

        // Função para ir para o anterior
        const anteriorSlide = () => {
            index--;
            if (index < 0) {
                index = imagens.length - 1;
            }
            mostrarSlide();
        };

        // Reinicia o timer automático quando o usuário clica
        const reiniciarTimer = () => {
            clearInterval(intervalo);
            intervalo = setInterval(proximoSlide, 3000);
        };

        // Event Listeners dos botões
        btnDir.addEventListener('click', () => {
            proximoSlide();
            reiniciarTimer();
        });

        btnEsq.addEventListener('click', () => {
            anteriorSlide();
            reiniciarTimer();
        });

        // Inicia o timer automático deste carrossel
        intervalo = setInterval(proximoSlide, 3000);

        // Ajuste no redimensionamento da tela
        window.addEventListener('resize', mostrarSlide);
    });
});