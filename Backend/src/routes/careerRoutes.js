const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');

// API Endpoints
router.post('/skill-gap', careerController.skillGapAnalysis);
router.post('/roadmap', careerController.getCareerRoadmap);

module.exports = router;