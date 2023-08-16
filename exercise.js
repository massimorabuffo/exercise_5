const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

// Viene modificato anche person1 perché in questo caso i due oggetti condividono lo stesso spazio in memoria (la stessa "reference").
// Per effettuare modifiche ad un oggetto senza intervenire anche sull'altro, dovremmo prima creare una copia di person1 tramite un ciclo
// "for in", in questo modo faremo si che i due oggetti occupino due diversi spazi in memoria. 

console.log(person1);
console.log(person2);
