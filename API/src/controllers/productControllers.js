const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');
const validator = require('validator');
const Product = require('../models/Product');

async function getProducts(req, res) {
  try {
    let { page = 1, limit = 10, sort = 'nome,asc', search = '' } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    if (isNaN(page) || page < 1 || isNaN(limit) || limit < 1) {
      return res.status(400).json({ message: "Parâmetros page e limit devem ser números positivos" });
    }

    const [sortField, sortOrder] = sort.split(',');
    if (!sortField || !['asc', 'desc'].includes(sortOrder?.toLowerCase())) {
      return res.status(400).json({ message: "Parâmetro sort inválido. Formato esperado: campo,asc|desc" });
    }

    const options = {
      where: {},
      limit,
      offset: (page - 1) * limit,
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
}

async function getProductById(req, res) {
  try {
    const { id } = req.params;
    if (!validator.isUUID(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o produto', error: error.message });
  }
}

async function createProduct(req, res) {
  try {
    const { nome, descricao, preco, url_imagem, quantidade_em_stock } = req.body;

    const product = await Product.create({
      id: uuidv4(),
      nome,
      descricao,
      preco,
      url_imagem,
      quantidade_em_stock
    });

    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o produto', error: error.message });
  }
}

async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    if (!validator.isUUID(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Produto não encontrado.' });

    await product.update(req.body);

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o produto', error: error.message });
  }
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    if (!validator.isUUID(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Produto não encontrado.' });

    await product.destroy();
    res.status(204).send();

  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar o produto', error: error.message });
  }
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
