db.menu.aggregate([
  {
    $project: {
      dish: 1,
      // Cria um campo com o preço acrescido de 10% (apenas na visualização)
      preco_com_taxa: { $add: ["$price", 5] }, 
      // Transforma o nome do prato em letras maiúsculas
      nome_caixa_alta: { $toUpper: "$dish" }
    }
  }
]);

db.menu.aggregate([
  {
    $project: {
      nome_do_prato: "$dish", // Renomeei 'dish' para 'nome_do_prato'
      valor: "$price",        // Renomeei 'price' para 'valor'
      _id: 0
    }
  }
]);

db.menu.aggregate([ //incluindo ou excluindo campos
  { 
    $project: { 
      dish: 1,    // Eu quero ver o nome do prato
      price: 1,   // Eu quero ver o preço
      _id: 0      // Eu NÃO quero ver o ID (ele vem por padrão, então tem que desligar)
    } 
  }
]);