bot = prompt("Salut jeune padawan, ca va ?");
console.log(`ta réponse : ${bot}`);

sentence = bot.split("");

//Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
if (sentence[sentence.length - 1] == "?") {
  console.log("Bot : Ouais ouais ouais");
}

//Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
else if (bot == bot.toUpperCase() && bot !== "") {
  console.log("Pwa, calme-toi..");
}

//Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
else if (bot.toLowerCase().includes("fortnite")) {
  console.log("Bot : on s'fait une partie soum-soum ?");
}

//Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
else if (bot === "") {
  console.log("Bot : T'es en pls ou quoi ?");
}

//Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
else {
  console.log("Bot : balek");
}
