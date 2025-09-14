require('dotenv').config();
const express = require('express');
const cors = require("cors");

const { sequelize, connectWithRetry } = require('./src/config/database');
const { seedDatabase } = require('./src/config/seed');
const productRoutes = require("./src/routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", productRoutes);

async function startServer() {
  try {
    await connectWithRetry();
    await sequelize.sync();
    await seedDatabase();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`API iniciada em :${PORT}`));
  } catch (err) {
    console.error("Erro ao iniciar o servidor:", err);
    process.exit(1);
  }
}

startServer();
