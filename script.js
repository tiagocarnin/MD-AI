document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".chat-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let input = document.querySelector(".chat-form input");
        let message = input.value.trim();
        let chatBox = document.querySelector(".chat-box");
        let loadingBar = document.querySelector(".loading-bar");

        if (message !== "") {
            // Adicionar mensagem do usuário
            let userMessage = `<div class="message user"><p>${message}</p></div>`;
            chatBox.innerHTML += userMessage;
            input.value = "";

            // Exibir barra de loading
            loadingBar.style.display = "block";

            console.log("Pergunta enviada:", message); // Depuração

            // Simular resposta após 2 segundos
            setTimeout(() => {
                loadingBar.style.display = "none";

                let botMessage = `<div class="message bot"><p>Resposta gerada pelo assistente...</p></div>`;
                chatBox.innerHTML += botMessage;
                chatBox.scrollTop = chatBox.scrollHeight;

                console.log("Resposta recebida"); // Depuração
            }, 2000);
        }
    });
});
