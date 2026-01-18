function selectPrompt(text) {
  document.getElementById("userInput").value = text;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chatBox");
  const btn = document.getElementById("sendBtn");

  if (!input.value.trim()) return;

  // START LOADING
  btn.classList.add("loading");
  btn.disabled = true;

  chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
  chat.innerHTML += `<p><i>CaptionCraft AI is thinking...</i></p>`;

  input.value = "";

  setTimeout(() => {
    chat.innerHTML += `
<b>Generated Captions:</b><br>
✨ Turning visuals into viral stories<br>
🔥 Scroll-stopping content<br>
🚀 Powered by AI creativity<br><br>

<b>Hashtags:</b><br>
#CaptionCraftAI #ViralContent #ReelsIndia #AItools
<hr>
`;

    // STOP LOADING
    btn.classList.remove("loading");
    btn.disabled = false;

  }, 1800);
}

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
