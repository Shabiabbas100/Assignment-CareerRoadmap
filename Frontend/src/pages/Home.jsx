import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { checkSkillGap, getRoadmap } from '../api';
import Footer from '../components/Footer'
const Home = () => {
  const [role, setRole] = useState('Frontend Developer');
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Skill add karne ka logic (Enter dabane par puchuk se )
  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
      }
      setSkillInput('');
    }
  };

  // Skill remove 
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  // Form Submit
  const handleSubmit = async () => {
    if (skills.length === 0) return alert("Please add at least one skill!");
    
    setLoading(true);
    try {
      // Parallel API calls (Dono ek saath)
      const [gapData, roadmapData] = await Promise.all([
        checkSkillGap(role, skills),
        getRoadmap(role)
      ]);

      // Data lekar Dashboard par jao
      navigate('/dashboard', { state: { gapData, roadmapData } });
    } catch (error) {
      alert("Error connecting to backend. Ensure server is running!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex justify-center items-center mt-10 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Start Your Analysis</h2>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Target Role</label>
            <select 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Data Analyst</option>
            </select>
          </div>

          
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Your Current Skills (Press Enter to add)</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. React, Java, SQL..."
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleAddSkill}
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {skills.map((skill, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center">
                  {skill}
                  <button onClick={() => removeSkill(skill)} className="ml-2 text-indigo-900 font-bold">×</button>
                </span>
              ))}
            </div>
          </div>

          <button 
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Analyze My Career Path'}
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;