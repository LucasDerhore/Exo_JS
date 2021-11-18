let etage = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
);

let num = "";

for (let i = 1; i <= etage; i++) {
  for (let j = 0; j < etage - i; j++) {
    num += " ";
  }
  for (let k = 0; k < i; k++) {
    num += "#";
  }
  num += "\n";
}

console.log(num);
