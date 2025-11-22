import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// 1. Skill Gap Check
export const checkSkillGap = async (role, skills) => {
  const response = await axios.post(`${API_BASE_URL}/skill-gap`, { role, skills });
  // Humein andar wala 'data' object chahiye.
  if(response.data.status === 'success') {
      return response.data.data; 
  }
  return response.data; 
};

// 2. Roadmap Fetch
export const getRoadmap = async (role) => {
  const response = await axios.post(`${API_BASE_URL}/roadmap`, { role });
  if(response.data.status === 'success') {
      return response.data.data;
  }
  return response.data;
};

// 3. HackerNews API (Ye same rahega)
export const getTechNews = async () => {
  try {
    const { data: storyIds } = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    const top5Ids = storyIds.slice(0, 5);

    const storyPromises = top5Ids.map(id => 
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    );

    const stories = await Promise.all(storyPromises);
    return stories.map(s => s.data);
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};