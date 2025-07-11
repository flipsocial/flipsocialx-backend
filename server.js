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

app.post('/upload', (req, res) => {
  const { video_url, description } = req.body;

  if (!video_url || !description) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  console.log("✅ Video recibido:", {
    video_url,
    description
  });

  res.status(200).json({ message: 'Video recibido con éxito 🚀' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
// cambio forzado
