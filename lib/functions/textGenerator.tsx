const words = [
  "bonjour",
  "ordinateur",
  "développeur",
  "javascript",
  "réactif",
  "souris",
  "clavier",
  "écran",
  "logiciel",
  "internet",
  "programmation",
  "interface",
  "composant",
  "fonctionnalité",
  "dynamique",
];

export function generateRandomText(wordCount = 10) {
  let text = "";
  for (let i = 0; i < wordCount; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    text += randomWord + " ";
  }
  return text.trim();
}
