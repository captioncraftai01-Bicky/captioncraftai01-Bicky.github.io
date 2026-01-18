function selectPrompt(text) {
  document.getElementById("userInput").value = text;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chatBox");
  const btn = document.getElementById("sendBtn");

  if (!input.value.trim()) return;

  btn.classList.add("sending");

  chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
  chat.innerHTML += `<p class="loading">CaptionCraft AI is thinking...</p>`;

  const userText = input.value;
  input.value = "";

  setTimeout(() => {
    chat.innerHTML += `
<b>Generated Captions:</b><br>
✨ Turning moments into viral stories<br>
🔥 Content that stops the scroll<br>
🚀 AI powered creativity<br><br>

<b>Hashtags:</b><br>
#CaptionCraftAI #ViralReels #ContentCreator #AItools #TrendingNow
<hr>
`;
    btn.classList.remove("sending");
  }, 1500);
}
