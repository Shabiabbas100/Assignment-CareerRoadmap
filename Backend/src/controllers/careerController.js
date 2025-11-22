const careerService = require('../services/careerService');
const asyncHandler = require('express-async-handler'); // alternative for try-catch,which is a bit lengthy
const customError = require('../utils/customError');

exports.skillGapAnalysis = asyncHandler(async (req, res, next) => {
    const { role, skills } = req.body;

    // Validation , if user sends empty data so we handle that
    if (!role || !skills) {
        return next(new AppError('Please provide both Role and Skills.', 400));
    }

    // Skills array hona chahiye
    const skillsArray = Array.isArray(skills) ? skills : skills.split(',');

    // Call Service
    const result = careerService.analyzeSkillGap(role, skillsArray);

    res.status(200).json({
        status: 'success',
        data: result
    });
});

exports.getCareerRoadmap = asyncHandler(async (req, res, next) => {
    const { role } = req.body;

    if (!role) {
        return next(new AppError('Role is required.', 400)); // 400 means that userside error hai
    }

    const result = careerService.getRoadmap(role);

    res.status(200).json({
        status: 'success',
        data: result
    });
});