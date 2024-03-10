import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loremIpsum } from "lorem-ipsum";
import './LegoFlowerPage.css';
import profile_image from './assets/CS206_profile_image.jpeg'


function LegoFlowerPage() {
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
            <button className="selectedPageButton">Tutorial Example</button>
            <button onClick={handleProfileStoryClick} className="pageButton">Profile Story Introduction</button>
            <button onClick={handleActivityIntroClick} className="pageButton">Activity Introduction</button>
            {/* <button onClick={handleActivityIntroClick} className="pageButton">Event Prep Introduction</button> */}
        </div>
        <div className='subtitle'>
            <p>🌹 Building a Lego Rose: User Insights and Step-by-Step Guide 🌹</p>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-content'>
              <p>In the realm of creativity and craftsmanship, Lego transcends age and time, offering endless possibilities for construction and imagination. Among its diverse creations, the Lego rose stands out as a symbol of beauty and innovation, combining the timeless appeal of a flower with the modern twist of Lego design. This article introduces the captivating Lego rose, its versatile uses, and a comprehensive guide to creating your own.</p>
            </div>
          </div>
        </div>
        <div className='demo-row'>
          <div className='single-demo-column'>
            <div className='demo-title'>
              <p> 🌅 View under day light</p>
            </div>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/03a87a1d-e24a-43b1-aad8-c11498b63072?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="550" height="400" frameborder="0"></iframe>
            </div>
          </div>
          <div className='single-demo-column'>
            <div className='demo-title'>
              <p> 💡 View under electronic light</p>
            </div>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/bb1086ba-0561-42ae-9b69-8e28e8d2b058?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="550" height="400" frameborder="0"></iframe>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-content'>
              <p>The Lego rose serves multiple purposes, transcending the mere decorative. It's a perennial bloom, immune to the withering of time, making it an ideal adornment for spaces needing a touch of everlasting beauty. As a gift, it symbolizes enduring affection, offering a unique alternative to traditional flowers for occasions like Valentine's Day, anniversaries, or as a thoughtful gesture of appreciation. Its dual visual appeal in different lighting conditions adds an extra layer of versatility, fitting seamlessly into various decor themes and personal tastes.</p>
            </div>
          </div>
        </div>
        <div className='subsubtitle'>
            <p>🛠️ Step by Step Guide</p>
        </div>
        <div className='demo-column'>
          <div className='single-demo-row'>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/91ca3932-17da-4f7f-a5c8-c2e53dfc0403?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="550" height="400" frameborder="0"></iframe>
            </div>
            <div className='demo-content'>
              <p>A set that includes two buildable red roses designed to captivate and charm. Each rose, meticulously crafted with vibrant red LEGO bricks, features an adjustable stem, allowing you to tailor its display to suit any setting. Standing over 10 inches (26 cm) tall, these roses are the perfect size for showcasing in a vase, bringing a touch of everlasting bloom to any room. Whether under the soft glow of daylight or illuminated by electronic light, these LEGO roses offer a stunning and creative twist on traditional floral decor, promising to catch the eye and spark conversation.</p>
            </div>
          </div>
          <div className='single-demo-row'>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/d7bb5e13-9ac4-41f6-95f7-05ecd14f3c23?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="550" height="400" frameborder="0"></iframe>
            </div>
            <div className='demo-content'>
              <p>The hips face the side of the mat. The hips and shoulders open to the side when moving from Warrior I to Warrior II. You'll also rotate your back foot, angling your toes at about 45 degrees. In both Warrior poses, aim to keep your front knee stacked over the ankle. Your front toes face forward.</p>
            </div>
          </div>
          <div className='single-demo-row'>
            <div className='demo-file'>
              <iframe src="https://lumalabs.ai/embed/6c3786fa-30d9-4960-ad02-af566e84c95f?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="550" height="400" frameborder="0"></iframe>
            </div>
            <div className='demo-content'>
              <p>The hips face the side of the mat. The hips and shoulders open to the side when moving from Warrior I to Warrior II. You'll also rotate your back foot, angling your toes at about 45 degrees. In both Warrior poses, aim to keep your front knee stacked over the ankle. Your front toes face forward.</p>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-text-section'>
            <div className='text-content'>
              <p>The Lego rose is more than just a playful rendition of a natural flower; it's a testament to the creativity and versatility that Lego offers. Whether displayed under the soft rays of daylight or the vibrant glow of electronic light, it remains a captivating piece. By following the guide above, you can create a unique and enduring symbol of beauty and innovation. Enjoy the process of building and the endless joy it brings as a decorative masterpiece or a heartfelt gift.</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default LegoFlowerPage;