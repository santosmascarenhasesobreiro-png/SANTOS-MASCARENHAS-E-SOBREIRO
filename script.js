document.addEventListener("DOMContentLoaded", () => {
    // === CARROSSEL DE POSTS ===
    const posts = [
      "Como melhorar seu site com SEO",
      "5 Dicas de marketing digital para iniciantes",
      "Como criar um formulário de contato funcional",
      "Importância da acessibilidade no seu site",
      "Técnicas para aumentar conversões com design",
      "Como integrar o WhatsApp ao seu site"
    ];
  
    const track = document.querySelector(".carousel-track");
    if (track) {
      posts.forEach(post => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        item.textContent = post;
        track.appendChild(item);
      });
  
      const leftBtn = document.querySelector(".carousel-btn.left");
      const rightBtn = document.querySelector(".carousel-btn.right");
  
      let currentIndex = 0;
  
      function updateCarousel() {
        const width = track.children[0].offsetWidth + 20; // 20px gap
        track.style.transform = `translateX(-${currentIndex * width}px)`;
      }
  
      rightBtn.addEventListener("click", () => {
        if (currentIndex < posts.length - 1) {
          currentIndex++;
          updateCarousel();
        }
      });
  
      leftBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });
  
      // Auto slide a cada 4 segundos
      setInterval(() => {
        if (currentIndex < posts.length - 1) {
          currentIndex++;
        } else {
          currentIndex = 0;
        }
        updateCarousel();
      }, 4000);
    }
  
    // === CHATBOT FLUTUANTE ===
    const chatbot = document.getElementById("chatbot");
    const toggleBtn = document.getElementById("chatbot-toggle");
    const closeBtn = document.getElementById("chatbot-close");
    const messagesContainer = document.getElementById("chatbot-messages");
    const inputField = document.getElementById("chatbot-input");
  
    if (chatbot && toggleBtn && closeBtn && messagesContainer && inputField) {
      // Abrir chatbot
      toggleBtn.addEventListener("click", () => {
        chatbot.style.display = "flex"; // mostrar chatbot
        toggleBtn.style.display = "none"; // esconder botão
        inputField.focus();
      });
  
      // Fechar chatbot
      closeBtn.addEventListener("click", () => {
        chatbot.style.display = "none"; // esconder chatbot
        toggleBtn.style.display = "block"; // mostrar botão
      });
  
      const respostas = {
        "juridico" : "juridico blabla",
        "ola": "Olá, como posso ajudar?",
        "horário": "Nosso atendimento é de segunda a sexta, das 9h às 18h.",
        "documentos": "Para iniciar seu processo, leve RG, CPF e comprovante de residência.",
        "áreas": "Atuamos em Direito Civil, Família, Trabalhista e mais.",
        "contato": "Você pode nos ligar no (XX) XXXX-XXXX ou enviar WhatsApp pelo site.",
      };
  
      function appendMessage(text, className) {
        const msg = document.createElement("div");
        msg.classList.add("message", className);
        msg.textContent = text;
        messagesContainer.appendChild(msg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // rolar para baixo
      }
  
      function botResponse(input) {
        input = input.toLowerCase();
        for (let key in respostas) {
          if (input.includes(key)) {
            return respostas[key];
          }
        }
        return "Desculpe, não entendi sua pergunta. Pode reformular?";
      }
  
      function sendMessage() {
        const input = inputField.value.trim();
        if (!input) return;
        appendMessage(input, "user");  // classe "user"
        inputField.value = "";
  
        const response = botResponse(input);
        setTimeout(() => appendMessage(response, "bot"), 600);  // classe "bot"
      }
  
      // Enviar mensagem com Enter
      inputField.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          sendMessage();
        }
      });
    }
  });