import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import LegoFlowerPage from './LegoFlowerPage';
import ProfileStoryPage from './ProfileStoryPage';
import ActivityPage from './ActivityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lego_flower" element={<LegoFlowerPage />} />
        <Route path='/profile_story' element={<ProfileStoryPage />}/>
        <Route path='/activity_intro' element={<ActivityPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
