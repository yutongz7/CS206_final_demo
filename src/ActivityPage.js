import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loremIpsum } from "lorem-ipsum";
import './ActivityPage.css';
import profile_image from './assets/yoga.jpeg'

function ActivityPage() {
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

  return (
    <div className="main">
        <div className='title'>
            <p>Storytelling with 3D imaging</p>
        </div>
        <div className='button-row'>
             <button onClick={handleHomeClick} className="pageButton">Home</button>
            <button onClick={handleTutorialClick} className="pageButton">Tutorial Example</button>
            <button onClick={handleProfileStoryClick} className="pageButton">Profile Story Introduction</button>
            <button onClick={handleProfileStoryClick} className="selectedPageButton">Activity Introduction</button>
            {/* <button onClick={handleProfileStoryClick} className="pageButton">Event Prep Introduction</button> */}
        </div>
        <div className='subtitle'>
            <p>🧘‍♀️ Yoga: Enhance Study, Health, and Stress Relief 🧘‍♀️</p>
        </div>
        <div className='introduction-section'>
          <img src={profile_image} className="background-image"/>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-content'>
            <p>Yoga, an ancient practice rooted in over 5,000 years of Indian philosophy, has evolved into a holistic approach to wellness, offering benefits that extend far beyond physical fitness. It encompasses a variety of practices, including physical postures (asanas), breathing techniques (pranayama), meditation (dhyana), and lifestyle principles, all aimed at harmonizing the body, mind, and spirit. In the fast-paced rhythm of modern life, yoga emerges as a sanctuary for those seeking solace from the stresses of daily routines, especially for students and professionals who demand a lot from their mental faculties.</p>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-subtitle'>
              <p>The Science Behind Yoga and Study Enhancement</p>
            </div>
            <div className='text-content'>
              <p>Yoga isn't just about bending and stretching; it's a mindfulness practice that combines physical postures, breathing exercises, and meditation to foster harmony between body and mind. This holistic approach can significantly improve concentration and memory, which are crucial for effective studying. By reducing stress and anxiety, yoga allows the mind to settle into a state of deeper focus, enabling learners to absorb and retain information more efficiently.</p>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-subtitle'>
              <p>Health Benefits of Regular Yoga Practice</p>
            </div>
            <div className='text-content'>
              <p>Physically, yoga offers a myriad of health benefits, including improved flexibility, stronger muscles, better posture, and enhanced respiratory functions. The slow, controlled movements help in toning the body, while the breathing exercises boost oxygen supply to the brain, improving overall energy levels. Regular practice can also help regulate blood pressure and contribute to a healthier heart. For students and professionals alike, these benefits mean less sick days and more energy for both work and study.</p>
            </div>
          </div>
        </div>
        {/* <video width="600" height="auto" controls>
          <source src={exampleVideo} type="video/mp4" />
        </video> */}
        {/* <p className='video-caption'>Recording of a dance at Stanford</p> */}
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-subtitle'>
              <p>Yoga for Stress Relief</p>
            </div>
            <div className='text-content'>
              <p>One of the most celebrated aspects of yoga is its ability to relieve stress. The practice encourages relaxation and focuses on the present moment, helping to quiet the constant chatter of the mind. This is particularly beneficial for students or anyone facing high levels of stress, offering a natural way to manage anxiety levels, improve mood, and foster a general sense of well-being.</p>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-subtitle'>
              <p>Incorporating Yoga into Your Routine</p>
            </div>
            <div className='text-content'>
              <p>Adding yoga to your daily routine doesn't require hours of practice every day. Even short sessions of 10-15 minutes can be highly beneficial. Let's start from here:</p>
            </div>
          </div>
        </div>
        <div className='demo-section'>
          <div className='single-demo'>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/3ef65586-b1e2-460d-9415-7903049e36c3?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="600" height="400" frameborder="0"></iframe>
            </div>
            <div className='demo-content'>
              <p style={{ fontWeight: 'bold' }}>Warrior II </p>
              <p style={{ fontWeight: 'bold' }}>2 min each direction</p>
              <p>The hips face the side of the mat. The hips and shoulders open to the side when moving from Warrior I to Warrior II. You'll also rotate your back foot, angling your toes at about 45 degrees. In both Warrior poses, aim to keep your front knee stacked over the ankle. Your front toes face forward.</p>
            </div>
          </div>
          <div className='single-demo'>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/0a29f094-baa2-44b0-9bfc-73926bb6c6e6?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="600" height="400" frameborder="0"></iframe>
            </div>
            <div className='demo-content'>
              <p style={{ fontWeight: 'bold' }}>Downward-Facing Dog</p>
              <p style={{ fontWeight: 'bold' }}>1 min + 30 sec break + 1 min</p>
              <p>From all fours, walk your hands 6 inches in front of you. Tuck your toes and lift your hips up and back to lengthen your spine. If your hamstrings are tight, keep your knees bent in order to bring your weight back into the legs.  Spread your fingers wide, press into your hands, and rotate your arms so that your biceps are facing toward one another. Press your thighs back toward the wall behind you.</p>
            </div>
          </div>
          <div className='single-demo'>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/6594d602-ee23-4cd7-a33d-6bff5ad6f664?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="600" height="400" frameborder="0"></iframe>
            </div>
            <div className='demo-content'>
              <p style={{ fontWeight: 'bold' }}>Cobbler's Pose</p>
              <p style={{ fontWeight: 'bold' }}>2 min</p>
              <p>If your knees are high, it takes a lot of effort to hold them up, and your legs need to be relaxed to enjoy the benefits of the stretch. The solution is to place a block (or something else supportive) under each knee to give them something to rest upon.  Since it's ​unusual to sit this way in everyday life, this pose stretches neglected areas of the body, particularly the adductor groups of the groin.</p>
            </div>
          </div>
          <div className='single-demo'>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/683145de-cb57-49d8-bf07-0acb6a397ccf?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="600" height="400" frameborder="0"></iframe>
            </div>
            <div className='demo-content'>
              <p style={{ fontWeight: 'bold' }}>Cobra Pose</p>
              <p style={{ fontWeight: 'bold' }}>3 min</p>
              <p>If your knees are high, it takes a lot of effort to hold them up, and your legs need to be relaxed to enjoy the benefits of the stretch. The solution is to place a block (or something else supportive) under each knee to give them something to rest upon.  Since it's ​unusual to sit this way in everyday life, this pose stretches neglected areas of the body, particularly the adductor groups of the groin.</p>
            </div>
          </div>
          <div className='single-demo'>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/d1fda928-8982-4d1f-a012-fc630f23c43f?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="600" height="400" frameborder="0"></iframe>
            </div>
            <div className='demo-content'>
              <p style={{ fontWeight: 'bold' }}>Child's Pose</p>
              <p style={{ fontWeight: 'bold' }}>2 min</p>
              <p>Don't be afraid to play with different iterations! You can spread your knees slightly wider or bring your arms alongside your legs, palms up. See what these modifications bring up for you and which version of the pose feels most connected to your body. If you wish, instead of extending your arms on the floor, reach them back alongside your feet, palms facing up. Don't shy away from using blocks, blankets, or bolsters. Child's Pose is meant to be restful and soothing.</p>
            </div>
          </div>
        </div>

        
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-content'>
              <p>In conclusion, yoga offers a powerful way to enhance your study habits, improve your health, and manage stress. By incorporating it into your daily routine, you can enjoy the myriad benefits that this ancient practice has to offer. Embrace yoga as a tool for personal growth and watch as it transforms your life, one pose at a time.</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ActivityPage;