import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loremIpsum } from "lorem-ipsum";
import './ProfileStoryPage.css';
import profile_image from './assets/CS206_profile_image.jpeg'
import exampleVideo from './assets/dance_video.mp4';

function ProfileStoryPage() {
  const loremText = loremIpsum({
    count: 5,
    format: "plain",
    units: "sentence",
  });

  let navigate = useNavigate();

  function handleHomeClick() {
    navigate('/');
  }
  function handleTutorialClick() {
    navigate('/lego_flower');
  }
  function handleProfileStoryClick() {
    navigate('/profile_story');
  }
  function handleActivityIntroClick() {
    navigate('/activity_intro');
  }

  return (
    <div className="main">
        <div className='title'>
            <p>Storytelling with 3D imaging</p>
        </div>
        <div className='button-row'>
             <button onClick={handleHomeClick} className="pageButton">Home</button>
            <button onClick={handleTutorialClick} className="pageButton">Tutorial Example</button>
            <button onClick={handleProfileStoryClick} className="selectedPageButton">Profile Story Introduction</button>
            <button onClick={handleActivityIntroClick} className="pageButton">Activity Introduction</button>
            {/* <button onClick={handleActivityIntroClick} className="pageButton">Event Prep Introduction</button> */}
        </div>
        <div className='subtitle'>
            <p>🩰 Tingyu: Embracing a Passion for Street Dance 🩰</p>
        </div>
        <div className='introduction-section'>
          <img src={profile_image} className="profile-image"/>
          <div className='text-section'>
            <div className='text-subtitle'>
              <p>Q1: Could you first introduce yourself?</p>
            </div>
            <div className='text-content'>
              <p>{loremText}</p>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-subtitle'>
              <p>Q2: When did you start learning to dance?</p>
            </div>
            <div className='text-content'>
              <p>{loremText}</p>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-subtitle'>
              <p>Q3: What types of dances have you tried?</p>
            </div>
            <div className='text-content'>
              <p>{loremText}</p>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-subtitle'>
              <p>Q3: What keeps you dancing street dance until now? What does street dance mean to you?</p>
            </div>
            <div className='text-content'>
              <p>{loremText}</p>
            </div>
          </div>
        </div>
        <video width="600" height="auto" controls>
          <source src={exampleVideo} type="video/mp4" />
        </video>
        <p className='video-caption'>Recording of a dance at Stanford</p>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-subtitle'>
              <p>Q4: After coming to Stanford, what dance clubs have you participated in? How was the overall experience?</p>
            </div>
            <div className='text-content'>
              <p>{loremText}</p>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-subtitle'>
              <p>Q5: Can you share your most challenging dance learning experience?</p>
            </div>
          </div>
        </div>
        <div className='demo-section'>
          <div className='single-demo'>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/2a1c1768-d01a-48d3-b9f7-7441a8aee48a?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="500" height="400" frameborder="20"></iframe>
            </div>
            <div className='demo-content'>
              <p>{loremText}</p>
            </div>
          </div>
          <div className='single-demo'>
            <div className='demo-content'>
              <p>{loremText}</p>
            </div>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/726cf9a9-a509-4644-814a-be27f9ab2bd4?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="500" height="400" frameborder="20"></iframe>
            </div>
          </div>
        </div>
        <div className='demo-section'>
          <div className='single-demo'>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/5842a8bc-5b12-4a7b-bafb-e0c3fd45e7bf?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="500" height="400" frameborder="20"></iframe>
            </div>
            <div className='demo-content'>
              <p>{loremText}</p>
            </div>
          </div>
          <div className='single-demo'>
            <div className='demo-content'>
              <p>{loremText}</p>
            </div>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/9f432a5e-bb4a-49bf-807c-d6793e917ae0?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="500" height="400" frameborder="20"></iframe>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-content'>
              <p>{loremText}</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProfileStoryPage;