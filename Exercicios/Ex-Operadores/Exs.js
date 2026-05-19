db.produtos.inserMany([
   {
    "_id": 1,
    "nome": "Notebook Dell",
    "categoria": "Eletrônicos",
    "preco": 4500,
    "estoque": 15,
    "avaliacao": 4.7
  },
  {
    "_id": 2,
    "nome": "Smartphone Samsung",
    "categoria": "Eletrônicos",
    "preco": 2500,
    "estoque": 30,
    "avaliacao": 4.5
  },
  {
    "_id": 3,
    "nome": "Cadeira Gamer",
    "categoria": "Móveis",
    "preco": 1200,
    "estoque": 10,
    "avaliacao": 4.8
  }
]);

// 1) Utilizando o operador $gte (greater than or equal ou maior que ou igual) para achar produtos com preço maior ou igual a 2000
db.produtos.find({ "preco": {"$gte": 2000}});

// 2) Filtre os produtos que pertencem à categoria "Móveis" e possuem avaliação superior a 4.5 usando $and
db.produtos.find({ 
    "$and": [ 
        {"categoria": "Móveis"},
        {"avaliacao": {"$gt": 4.5}}
    ]
});

// 3) Use $or para retornar todos os produtos que custam menos de 2000 ou têm estoque maior que 20.
db.produtos.find({
    "$or": [
        { "preco": {"$lt": 2000}},
        { "estoque": {"$gt": 20}}
    ]
});

// 4) Escreva uma consulta que retorne apenas os produtos que possuem o campo avaliacao
db.produtos.find({ "avaliacao": {"$exists": true}});


// 5) Utilize $nor para excluir da busca os produtos da categoria "Eletrônicos" e aqueles com preço maior que 3000.
db.produtos.find({
    "$nor": [
        { "categoria": "Eletrônicos"},
        { "preco": { "$gt": 3000}}
    ]
});