const express = require('express');
const path = require('path');
const bukutamuController = require('../controllers/bukutamuController');
const bukutamuRoutes = express.Router();

// Serve index.html for the root route
bukutamuRoutes.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', 'htmlbukutamu', 'index.html');
  res.sendFile(filePath);
});

// Create a new bukutamu
bukutamuRoutes.post('/', bukutamuController.createBukuTamu);

// Get all buku tamu
bukutamuRoutes.get('/', bukutamuController.getBukuTamu);

// Get a bukutamu by ID
bukutamuRoutes.get('/:bukutamuId', bukutamuController.getBukuTamuById);

// Update a bukutamu by ID
bukutamuRoutes.put('/:bukutamuId', bukutamuController.updateBukuTamuById);

// Delete a bukutamu by ID
bukutamuRoutes.delete('/:bukutamuId', bukutamuController.deleteBukuTamuById);

module.exports = { bukutamuRoutes };