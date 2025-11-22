const { roleRequirements, careerRoadmaps } = require('../utils/mockData');
const customError = require('../utils/customError');

exports.analyzeSkillGap = (role, userSkills) => {
    const targetRole = roleRequirements[role.trim()];

    if (!targetRole) {
        throw new customError(`Role '${role}' not found.`, 404); 
    }

    // Normalizing the data  (Lowercase & Trim) , trim simply removes extra spaces😃
    const requiredSkills = targetRole;
    const normalizedUserSkills = userSkills.map(s => s.trim().toLowerCase());

    const matched = requiredSkills.filter(reqSkill => 
        normalizedUserSkills.includes(reqSkill.toLowerCase())
    );

    const missing = requiredSkills.filter(reqSkill => 
        !normalizedUserSkills.includes(reqSkill.toLowerCase())
    );

    const matchPercentage = Math.round((matched.length / requiredSkills.length) * 100);

    return {
        role,
        matchedSkills: matched,
        missingSkills: missing,
        matchPercentage: `${matchPercentage}%`,
        recommendations: missing.length > 0 
            ? `Focus on ${missing[0]} next.` 
            : "Ready for interview!",
        learningOrder: missing
    };
};

exports.getRoadmap = (role) => {
    const roadmap = careerRoadmaps[role.trim()];
    if (!roadmap) {
        throw new customError(`Roadmap for '${role}' not available.`, 404);
    }
    return { role, roadmap };
};