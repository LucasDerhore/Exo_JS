const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

let allRented = true;
books.forEach((x) => {
  if (x.rented == 0) {
    console.log(x);
    allRented = false;
  }
});

allRented == false
  ? console.log("Un livre n'a pas été emprunté")
  : console.log("Tous les livres ont été empruntés");

console.log("######################");
console.log("######################");
console.log("######################");

console.log("Quel est livre le plus emprunté ?");

let maxRent = 0;
let bookMaxRent = [];
books.forEach((x) => {
  x.rented > maxRent ? (maxRent = x.rented) && (bookMaxRent = x) : maxRent;
});

console.log(bookMaxRent);

console.log("######################");
console.log("######################");
console.log("######################");

console.log("Quel est le livre le moins emprunté ?");

let BookminRent = [];
books.forEach((x) => {
  x.rented < maxRent ? (BookminRent = x) : BookminRent;
});

console.log(BookminRent);

console.log("######################");
console.log("######################");
console.log("######################");

console.log("Trouve le livre avec l'ID: 873495");

books.forEach((x) => {
  x.id === 873495 ? console.log(x) : "";
});

console.log("######################");
console.log("######################");
console.log("######################");

console.log("Supprime le livre avec l'ID: 133712");

let remove = books.filter(function (x) {
  if (x.id === 133712) {
    return console.log(`${x.id} livre supprimé`);
  } else {
    return true;
  }
});

console.log(remove);

console.log("######################");
console.log("######################");
console.log("######################");

console.log(
  "Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)."
);

remove.sort(function (a, b) {
  let titleA = a.title;
  let titleB = b.title;
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }

  return 0;
});

console.log(remove);
