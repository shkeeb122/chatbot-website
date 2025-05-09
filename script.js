async function sendMessage() {
  const userInputField = document.getElementById("user-input");
  const userInput = userInputField.value.trim();
  const chatBox = document.getElementById("chat-box");

  if (!userInput) return;

  // Show user message
  chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  userInputField.value = "";

  try {
    const response = await fetch("https://umar-y55h.onrender.com/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    const botReply = data.response || "No response from server.";

    chatBox.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
  } catch (error) {
    chatBox.innerHTML += `<p><strong>Bot:</strong> Error: ${error.message}</p>`;
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}
