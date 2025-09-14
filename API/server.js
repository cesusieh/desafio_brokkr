require('dotenv').config();
const express = require('express');
const sequelize = require('./src/config/database');
const productRoutes = require("./src/routes/productRoutes")

const app = express()
app.use(express.json())

app.use("/api", productRoutes)

app.get('/', (req, res) => {
  res.send('API do Catálogo de Produtos funcionando!');
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados com o banco de dados.');

    app.listen(3000, () => {
      console.log(`Servidor rodando em http://localhost:3000`);
    });
  } catch (error) {
    console.error('Não foi possível iniciar o servidor:', error);
  }
};
startServer();