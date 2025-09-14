require('dotenv').config();
const express = require('express');
const cors = require("cors")
const { sequelize, connectWithRetry} = require('./src/config/database');
const productRoutes = require("./src/routes/productRoutes");
const { seedDatabase } = require('./src/config/seed');

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", productRoutes)

async function startServer() {
  try {
    await connectWithRetry();
    await sequelize.sync()

    await seedDatabase()

    app.listen(3000, () => console.log('API iniciada em :3000'));
  } catch (err) {
    console.log(err)
    process.exit(1);
  }
}
startServer();