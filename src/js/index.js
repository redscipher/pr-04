// evento espera carregar pagina
document.addEventListener('DOMContentLoaded', function(){

    // funcoes
    let execEscondeAbas = function(){
        try {
            // busca todas abas
            const abasCaixa = document.querySelectorAll('[data-aba-id]');
            // loop
            for(let i = 0; abasCaixa.length; i++){
                abasCaixa[i].classList.remove('shows__lista--is-ativo');
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    let escondeBotoes = function(){
        try {
            // busca todas abas
            const botoesAbas = document.querySelectorAll('[data-aba-botao]');
            // loop
            for(let i = 0; botoesAbas.length; i++){
                botoesAbas[i].classList.remove('shows__abas__botao--is-ativo');
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // seleciona todos botoes controle de abas
    const botoes = document.querySelectorAll('[data-aba-botao]');

    // loop p/ adicionar eventos a todos os botoes
    for(let i = 0; i < botoes.length; i++){
        // adiciona evento
        botoes[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.abaBotao;
            const aba = document.querySelector(`[data-aba-id=${abaAlvo}]`);
            // esconde abas
            execEscondeAbas();
            escondeBotoes();
            // exibe aba alvo
            aba.classList.add('shows__lista--is-ativo');
            botao.target.classList.add('shows__abas__botao--is-ativo');
        })
    }
})