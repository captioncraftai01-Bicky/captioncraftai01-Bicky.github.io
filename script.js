function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chatBox");
  const btn = document.getElementById("sendBtn");

  if (!input.value.trim()) return;

  const userText = input.value.toLowerCase();

  btn.classList.add("loading");
  btn.disabled = true;

  chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
  chat.innerHTML += `<p><i>CaptionCraft AI is thinking...</i></p>`;

  input.value = "";

  setTimeout(() => {

    let captions = "";
    let hashtags = "";

    if (userText.includes("instagram")) {
      captions = `
✨ Reel vibes that hit different  
🔥 Scroll-stopping moments  
📸 Turning frames into feelings
      `;
      hashtags = "#InstagramReels #ReelLife #ContentCreator #TrendingReels";
    } 
    else if (userText.includes("youtube")) {
      captions = `
🎥 Shorts that grab attention  
🚀 Growth starts with the right title  
🔥 Watch till the end
      `;
      hashtags = "#YouTubeShorts #YTgrowth #VideoCreator #ShortsViral";
    }
    else if (userText.includes("hashtag")) {
      captions = `
Boost your reach with trending tags  
Use less but relevant hashtags  
Consistency = growth
      `;
      hashtags = "#TrendingHashtags #ReachMore #SocialMediaTips";
    }
    else {
      captions = `
✨ Turning ideas into viral content  
🔥 AI-powered creativity  
🚀 Designed for creators
      `;
      hashtags = "#CaptionCraftAI #AICreator #ViralContent";
    }

    chat.innerHTML += `
<b>Generated Captions:</b><br>
${captions}<br><br>

<b>Hashtags:</b><br>
${hashtags}
<hr>
`;

    btn.classList.remove("loading");
    btn.disabled = false;

  }, 1500);
}
