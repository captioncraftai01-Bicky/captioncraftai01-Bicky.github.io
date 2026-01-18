function sendMessage() {
  const input = document.querySelector(".chat-bar input[type='text']");
  const text = input.value.trim();

  if (text === "") {
    alert("Please type something");
    return;
  }

  alert("Message sent: " + text);

  input.value = "";
}
