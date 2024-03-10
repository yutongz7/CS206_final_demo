import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  let navigate = useNavigate();

  function handleHomeClick() {
    navigate('/');
  }
  function handleTutorialClick() {
    navigate('/lego_flower');
  }
  function handleClick() {
    navigate('/profile_story');
  }

  return (
    <div className="main">
        <div className='title'>
            <p>Storytelling with 3D imaging</p>
        </div>
        <div className='button-row'>
             <button className="selectedPageButton">Home</button>
            <button onClick={handleTutorialClick} className="pageButton">Tutorial Example</button>
            <button onClick={handleClick} className="pageButton">Profile Story Introduction</button>
            <button onClick={handleClick} className="pageButton">Activity Introduction</button>
            {/* <button onClick={handleClick} className="pageButton">Event Prep Introduction</button> */}
        </div>
        <div className='introduction'>
            <p>In this project, we delve into the art of storytelling through the lens of 3D imaging. We've discovered that integrating 3D imaging not only offers a fresh perspective by presenting information from various angles but also significantly boosts audience engagement beyond what traditional text and image-based storytelling can achieve. Moreover, we're excited to share a comprehensive tutorial on using "Luma AI," an innovative 3D scanning app designed to empower creators to bring their stories to life in a more accessible and cost-effective way. </p>
        </div>
    </div>
  );
}

export default HomePage;
