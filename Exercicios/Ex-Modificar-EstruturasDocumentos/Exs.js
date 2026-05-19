db.heroes.insertMany([
  { _id: 1, name: "Spider-Man", city: "New York", power: ["Agility", "Web-Shooting"], defeatedVillains: 50 },
  { _id: 2, name: "Batman", city: "Gotham", power: ["Martial Arts", "Detective Skills"], defeatedVillains: 200 },
  { _id: 3, name: "Wonder Woman", city: "Themyscira", power: ["Super Strength", "Lasso"], defeatedVillains: 120 }
]);

/* HomemAranha desenvolveu um novo poder: Sentido Aranha Aprimorado.
 Adicione esse poder ao de "SpiderMan". */

 db.heroes.updateOne(
    {name: "Spider-Man"},
    {$push: {power: "Sentido Aranha Aprimorado"}}
 );

 /*O Batman prendeu mais 10 vilões.
  Atualize o campo defeatedVillains para refletir essa mudança. */
  db.heroes.updateOne(
    {name: "Batman"},
    {$inc: {defeatedVillains: 10}} //Agora o Batman derrotou 210 vilões
);

/*O nome da cidade da Mulher Maravilha foi alterado para "Amazonia".
 Atualize essa informação.*/
db.heroes.updateOne(
    {name: "Wonder Woman"},
    {$set: {city: "Amazonia"}}
);

/*O Batman perdeu suas "Detective Skills" (ele não se lembra mais de como investigar).
 Remova essa habilidade da lista power.*/
 db.heroes.updateOne(
    {name: "Batman"},
    {$pull: {power: "Detective Skills"}}
 );

 db.menu.insertMany([
  { _id: 1, dish: "Pizza", ingredients: ["Dough", "Tomato Sauce", "Cheese"], price: 30 },
  { _id: 2, dish: "Sushi", ingredients: ["Rice", "Fish", "Seaweed"], price: 40 },
  { _id: 3, dish: "Taco", ingredients: ["Tortilla", "Beef", "Cheese"], price: 15 }
]);

/*O restaurante decidiu aumentar o preço de todos os pratos em 10%.
 Atualize os preços. */
 db.menu.updateMany(
    {},
    {$mul: {price: 1.10}}
);

 /*O Taco agora vem com "Guacamole".
  Adicione esse ingrediente à lista ingredients.*/
  db.menu.updateOne( //antes eu tinha colocado insertOne, mas o DOCUMENTO Taco já existia no banco,
    {dish: "Taco"},  // então o certo é updateOne, afinal estamos mudando algo nele
    {$push: {ingredients: "Guacamole"}}
);