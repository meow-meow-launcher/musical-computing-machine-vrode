const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Разрешает доступ со всех доменов
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`CDN server is running at http://localhost:${PORT}`);
});
