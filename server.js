const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

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

app.post('/upload', async (req, res) => {
  const { video_url, description } = req.body;

  if (!video_url || !description) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

 // Guardar en Supabase
  const { data, error } = await supabase
    .from('videos')
    .insert([{ video_url, description }]);

  if (error) {
    console.error('❌ Error al guardar en Supabase:', error);
    return res.status(500).json({ message: 'Error al guardar en Supabase' });
  }

  console.log('✅ Video guardado en Supabase:', data);
  res.status(200).json({ message: 'Video recibido y guardado en Supabase 🚀' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
// cambio forzado

app.get('/', (req, res) => {
  res.send('FlipSocialX Backend v2 - Ruta /upload habilitada ✅');
});
