for (let i = 0; i < 100000; i++) {
    db.usuarios.insertOne({
      nome: `Usuario${1}`,
      email: `usuario${1}@email.com`,
      idade: Math.floor(Math.random() * 80) + 18
    });
  }