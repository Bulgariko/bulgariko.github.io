const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');

const responses = {
    'здр': 'Как мога да ви помогна днес?',
    'здрасти': 'Как мога да ви помогна днес?',
    'здравей': 'Как мога да ви помогна днес?',
    'как си': 'Аз съм просто бот, но съм тук, за да ти помогна!',
    'сбогом': 'Сбогом! Приятен ден!
    // Add more responses as needed
};

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.innerText = `${sender}: ${message}`;
    chatContainer.appendChild(messageElement);
}

function getResponse(message) {
    return responses[message.toLowerCase()] || "I'm not sure how to respond to that.";
}

  function sendMessage() {
      const userMessage = document.getElementById('user-input').value;
      displayMessage(userMessage, 'You');

      const botResponse = getResponse(userMessage);
      displayMessage(botResponse, 'Bulgariko');

      // Clear the user input after sending the message
      document.getElementById('user-input').value = '';
  }

function displayMessage(message, sender) {
    const chatMessages = document.getElementById("chat-messages");

    if (chatMessages) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender === "Chatbot" ? "bot" : "user");
        chatMessages.appendChild(messageElement);

        const messageLength = message.length;
        let i = 0;

        const typingEffect = setInterval(() => {
            messageElement.innerHTML = `${sender}: ${message.substr(0, i)}`;
            i++;
            if (i > messageLength) {
                clearInterval(typingEffect);
            }
        }, 50); // Adjust the interval for the typing speed
    }
}
