// chat-logic.js
function handleUserMessage(message) {
    const userInput = message.toLowerCase();
    
    // Model sorguları
    if (userInput.includes('3 serisi')) {
        return {
            text: bmwData.models["3-series"].description,
            isBot: true
        };
    }
    
    // Genel sorgu
    return {
        text: "Size BMW hakkında nasıl yardımcı olabilirim?",
        isBot: true
    };
}

// Mesaj gönderme fonksiyonu
function sendMessage() {
    const messageInput = document.querySelector('.message-input');
    const message = messageInput.value.trim();
    
    if (message) {
        // Kullanıcı mesajını ekle
        addMessageToChat(message, false);
        
        // Bot yanıtını al ve ekle
        const response = handleUserMessage(message);
        setTimeout(() => {
            addMessageToChat(response.text, true);
        }, 500);
        
        // Input'u temizle
        messageInput.value = '';
    }
}

// Mesajı chat'e ekleme fonksiyonu
function addMessageToChat(message, isBot) {
    const chatMessages = document.querySelector('.chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isBot ? 'bot-message' : 'user-message');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}