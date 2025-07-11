const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('FlipSocialX Backend en línea 🚀');
});

// Ruta para recibir videos desde el frontend
app.post('/upload', (req, res) => {
  const { video_url, description } = req.body;

  if (!video_url || !description) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  console.log("✅ Video recibido:", {
    video_url,
    description
  });

  // Aquí podrías guardar en Supabase más adelante

  res.status(200).json({ message: 'Video recibido con éxito 🚀' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
