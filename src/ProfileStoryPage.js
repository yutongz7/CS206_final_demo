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
              <p>Q1: When did you start dancing?</p>
            </div>
            <div className='text-content'>
              <p> + [SELF-INTRO] I began dancing in high school, attending classes at dance studios during winter breaks and summer vacations.</p>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-subtitle'>
              <p>Q2: What types of dance have you tried?</p>
            </div>
            <div className='text-content'>
              <p>I've mainly dabbled in street dance styles like urban (choreography), hip-hop, and jazz-funk. But I've also given Chinese traditional dance and Latin dance a whirl.</p>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-subtitle'>
              <p>Q3: What's kept you grooving with street dance all this time? What does it mean to you?</p>
            </div>
            <div className='text-content'>
              <p>I've just always been fascinated by it, even as a kid. The whole idea of dancing was super cool and alluring to me. Even though I wasn't taking formal classes then, I'd mimic my favorite dance moves and practice choreography with friends. As I got more into it, I wanted to up my dancing game and get more in tune with my body. Now, it's just a part of who I am.</p>
              <p>Street dance has been a real confidence booster for me. At the end of each class, we'd have these group performances in front of everyone. The other dancers would be cheering you on before, during, and after your performance. That kind of thing really helped me break out of my shell and become more fearless in life. Plus, street dancers are all about love and peace. When we'd battle other dancers, it wasn't just about winning; it was about showing respect, learning from others, and appreciating their skills. Street dance has definitely molded me in some pretty awesome ways.</p>
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
              <p>Q4: Since you've been at Stanford, have you joined any dance clubs? How's the vibe been?</p>
            </div>
            <div className='text-content'>
              <p>I haven't officially joined any dance clubs at Stanford yet, mostly because my schedule is pretty packed. But whenever I can, I try to squeeze in some public auditions or workshops that these clubs put on. There are so many clubs here, each with its own style and skill level. It's all about finding the right fit. Most of the clubs I've interacted with are super well-organized, and the energy is always amazing.</p>
            </div>
          </div>
        </div>   
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-subtitle'>
              <p>Q5: Can you share a dance challenge you've faced?</p>
            </div>
          </div>
        </div>
        <div className='demo-section'>
          <div className='single-demo'>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/2a1c1768-d01a-48d3-b9f7-7441a8aee48a?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="500" height="400" frameborder="20"></iframe>
            </div>
            <div className='demo-content'>
              <p>I remember this one time when I was learning a really intense hip-hop choreography. The beats were so fast-paced, and the transitions between moves were super quick. </p>
            </div>
          </div>
          <div className='single-demo'>
            <div className='demo-content'>
              <p>There were a lot of ground moves that I wasn't used to, so I kept forgetting them or missing the beat. It was a real test of patience and perseverance, but I eventually nailed it.</p>
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
              <p>I recall a challenging moment when I was mastering a high-energy hip-hop routine. The fast-paced beats and quick transitions made it quite demanding. I struggled with the unfamiliar ground moves, often forgetting them or losing the beat.</p>
            </div>
          </div>
          <div className='single-demo'>
            <div className='demo-content'>
              <p>Despite the challenge, I persisted and eventually mastered the routine.</p>
            </div>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/9f432a5e-bb4a-49bf-807c-d6793e917ae0?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="500" height="400" frameborder="20"></iframe>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProfileStoryPage;