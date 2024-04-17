const express = require('express');
const path = require('path');
const izinController = require('../controllers/izinController')
const izinRoutes = express.Router();

// Serve index.html for the root route
izinRoutes.get('/izin', (req, res) => {
    const filePath = path.join(__dirname, '..', 'htmlbukutamu', 'izin.html');
    res.sendFile(filePath);
  });

// get all izin
izinRoutes.get('/izin', izinController.getIzin);

// Create a new izin
izinRoutes.post('/izin', izinController.createIzin);

// Get a izin by ID
izinRoutes.get('/:izinId', izinController.getIzinById);

// Update a izin by ID
izinRoutes.put('/:izinId', izinController.updateIzinById);

// Delete a izin by ID
izinRoutes.delete('/:izinId', izinController.deleteIzinById);

module.exports = { izinRoutes };