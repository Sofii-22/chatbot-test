// script.js
document.getElementById('send-btn').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Mostrar mensaje del usuario
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerText = userInput;
    document.getElementById('chat-body').appendChild(userMessage);

    // Limpiar el input
    document.getElementById('user-input').value = '';

    // Respuesta del bot
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        
        // Respuestas automáticas básicas
        if (userInput.toLowerCase().includes('horario')) {
            botMessage.innerText = 'Nuestro horario de atención es de lunes a viernes de 7:00 AM a 6:00 PM y sábados de 8:00 AM a 2:00 PM.';
        } else if (userInput.toLowerCase().includes('examenes')) {
            botMessage.innerText = 'Ofrecemos una amplia variedad de exámenes, incluyendo análisis de sangre, pruebas de glucosa, perfiles lipídicos, y más.';
        } else if (userInput.toLowerCase().includes('ubicacion')) {
            botMessage.innerText = 'Estamos ubicados en la Calle Principal #123, Ciudad. ¡Te esperamos!';
        } else {
            botMessage.innerText = 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?';
        }

        document.getElementById('chat-body').appendChild(botMessage);
        document.getElementById('chat-body').scrollTop = document.getElementById('chat-body').scrollHeight;
    }, 1000);
}
