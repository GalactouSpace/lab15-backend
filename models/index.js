const db = require('../db');
const Producto = require('./producto');
const Categoria = require('./categoria');

Producto.belongsTo(Categoria, { foreignKey: 'categoriaId' });
Categoria.hasMany(Producto, { foreignKey: 'categoriaId' });

module.exports = { db, Producto, Categoria };
