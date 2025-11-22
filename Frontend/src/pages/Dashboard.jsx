import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NewsFeed from '../components/NewsFeed';
import Footer from '../components/Footer'

const Dashboard = () => {
  const location = useLocation();
  
  // Agar user bina form bhare yahan aaya, toh wapas bhej do tapaak se 😃
  if (!location.state) return <Navigate to="/" />;

  const { gapData, roadmapData } = location.state;

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />
      <div className="container mx-auto p-6">
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Results for: <span className="text-indigo-600">{gapData.role}</span></h2>
            <p className="text-gray-600 mt-2">Match Score: <span className="font-bold text-xl">{gapData.matchPercentage}</span></p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-700">📊 Skill Gap Analysis</h3>
            
            <div className="mb-4">
                <h4 className="text-green-600 font-semibold">✅ Skills You Have:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {gapData.matchedSkills.length > 0 ? gapData.matchedSkills.map(s => (
                        <span key={s} className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">{s}</span>
                    )) : <span className="text-gray-400 text-sm">None yet</span>}
                </div>
            </div>

            <div className="mb-4">
                <h4 className="text-red-500 font-semibold">❌ Skills Missing:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {gapData.missingSkills.map(s => (
                        <span key={s} className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">{s}</span>
                    ))}
                </div>
            </div>

            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500 mt-4">
                <p className="text-blue-800 font-medium">💡 Recommendation:</p>
                <p className="text-blue-600 text-sm">{gapData.recommendations}</p>
            </div>
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-700">🗺️ Career Roadmap</h3>
            <div className="space-y-6 border-l-2 border-gray-200 ml-2 pl-4">
                {Object.entries(roadmapData.roadmap).map(([phase, details]) => (
                    <div key={phase} className="relative">
                        <span className="absolute -left-[25px] top-1 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white"></span>
                        <h4 className="font-bold text-gray-800">{phase}</h4>
                        <p className="text-gray-600 text-sm mt-1">{details}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>

        <NewsFeed />

      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;