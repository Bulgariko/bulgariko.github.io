





















































































































































































const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');

const responses = {
    'hello': 'Hello! How can I assist you today?',
    'how are you': 'I\'m just a bot, but I\'m here to help you!',
    'goodbye': 'Goodbye! Have a great day!'
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
      const chatMessages = document.getElementById('chat-messages');
      if (chatMessages) {
          const messageElement = document.createElement('div');
          messageElement.innerText = `${sender}: ${message}`;
          chatMessages.appendChild(messageElement);
      }
  }
