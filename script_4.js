const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

console.log("Listes des entrepreneurs qui sont nés dans les années 70 :");
let test = entrepreneurs.filter((x) => {
  return x.year <= 1980 && x.year >= 1970;
});

console.log(test);

console.log("######################");
console.log("######################");
console.log("######################");

console.log(
  "Sors une array qui contient le prénom et le nom des entrepreneurs :"
);

let teest = [];
entrepreneurs.forEach((x) => {
  teest.push(`${x.first} ${x.last}`);
});

console.log(teest);

console.log("######################");
console.log("######################");
console.log("######################");

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");

let age = 0;
let date = new Date();
let currentYear = date.getFullYear();
entrepreneurs.forEach((x) => {
  age = currentYear - x.year;
  x.age = age;
});

console.log(entrepreneurs);

console.log("######################");
console.log("######################");
console.log("######################");

console.log(
  "Trie les entrepreneurs par ordre alphabétique du nom de famille ?"
);

let a = entrepreneurs;

function sortentrepreneurs(x, y) {
  if (x.last < y.last) {
    return -1;
  }
  if (x.last > y.last) {
    return 1;
  }
  return 0;
}

let s = a.sort(sortentrepreneurs);
console.log(s);
