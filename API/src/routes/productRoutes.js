const { Router } = require('express');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize')
const Product = require('../models/Product');

const router = Router();

router.get("/products", async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = 'nome,asc', search = '' } = req.query;
    const [sortField, sortOrder] = sort.split(',');

    const options = {
      where:{},
      limit: parseInt(limit),
      offset: (page - 1) * parseInt(limit),
      order: [[sortField, sortOrder.toUpperCase()]],
    };

    if (search) {
      options.where.nome = { [Op.like]: `%${search}%` };
    }

    const { count, rows } = await Product.findAndCountAll(options);

    res.json({
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        products: rows,
    });

  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o produto', error: error.message });
  }
});

router.post("/products", async (req, res) => {
    try {
        const { name, desc, price, image, qtd } = req.body;

        const id = uuidv4();

        const product = await Product.create({
            id,
            nome:name,
            descricao:desc,
            preco:price,
            url_imagem:image,
            quantidade_em_stock:qtd
        });

        res.status(201).json(product);

    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar o produto', error: error.message });
  }
});

router.put("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        await product.update(req.body);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o produto', error: error.message });
  }
});

router.delete("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        await product.destroy();
        res.status(204).send();

    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar o produto', error: error.message });
  }
});

module.exports = router;