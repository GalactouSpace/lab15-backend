require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { db } = require('./models');
const productoRoutes = require('./routes/producto.routes');
const categoriaRoutes = require('./routes/categoria.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', productoRoutes);
app.use('/api', categoriaRoutes);

db.sync({ alter: true })
  .then(() => {
    console.log('✅ Base de datos sincronizada');
    app.listen(process.env.PORT || 3001, () =>
      console.log(`Servidor en puerto ${process.env.PORT || 3001}`)
    );
  })
  .catch((err) => console.error('Error al conectar la base de datos:', err));
