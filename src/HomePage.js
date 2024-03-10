import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './HomePage.css';
import app_luma_img from './assets/luma_ai.jpeg'
import app_flythrough_img from './assets/flythroughs_ai.png'
import app_upload_img from './assets/upload.jpg'
import app_scene_img from './assets/scene.jpg'
import app_object_img from './assets/object-1.jpg'
import app_object_img_2 from './assets/object-2.jpg'
import app_object_img_3 from './assets/object-3.jpg'


function HomePage() {
  const codeString = `<iframe src="https://lumalabs.ai/embed/a4572635-8066-45d2-94b5-ffd4c55a92f0?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="667" height="500" frameborder="0" title="luma embed" style="border: none;"></iframe>`;
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
             <button className="selectedPageButton">Home</button>
            <button onClick={handleTutorialClick} className="pageButton">Tutorial Example</button>
            <button onClick={handleProfileStoryClick} className="pageButton">Profile Story Introduction</button>
            <button onClick={handleActivityIntroClick} className="pageButton">Activity Introduction</button>
            {/* <button onClick={handleClick} className="pageButton">Event Prep Introduction</button> */}
        </div>
        <div className='introduction'>
            <p>In this project, we delve into the art of storytelling through the lens of 3D imaging. We've discovered that integrating 3D imaging not only offers a fresh perspective by presenting information from various angles but also significantly boosts audience engagement beyond what traditional text and image-based storytelling can achieve. Moreover, we're excited to share a comprehensive tutorial on using "Luma AI," an innovative 3D scanning app designed to empower creators to bring their stories to life in a more accessible and cost-effective way. </p>
        </div>
        <div className='subtitle'>
            <p>📝 Notes for creating 3D storytelling ariticles</p>
        </div>
        <div className='section-column'>
          <div className='section-row'>
            <div className='main-text-subtitle'>
              <p>1. User friendly applications for 3D imaging creation</p>
            </div>
          </div>
          <div className='section-row'>
            <img src={app_luma_img} className="app-image" height={300}/>
            <img src={app_flythrough_img} className="app-image" height={300}/>
          </div>
          <div className='section-row'>
            <div className='main-text-section'>
              <p>Luma AI is a free application designed for creating 3D images of objects directly from your phone. In contrast, Flythroughs excels in producing spatial 3D imaging with superior scaling capabilities but requires an in-app purchase before exporting the scanned images. Here we'd like to discuss more about Luma AI.</p>
            </div>
          </div>
        </div>
        <div className='section-column'>
          <div className='section-row'>
            <div className='main-text-subtitle'>
              <p>2. Scanning methods in Luma AI</p>
            </div>
          </div>
          <div className='section-row'>
            <img src={app_upload_img} className="app-image" height={400}/>
            <img src={app_object_img} className="app-image" height={400}/>
            <img src={app_scene_img} className="app-image" height={400}/>
          </div>
          <div className='section-row'>
            <div className='main-text-section'>
              <p>Three strategies provide in Luma AI for creating 3D imaging: UPLOAD, OBJECT, and SCENE. The "UPLOAD" method utilizes videos you select to generate a 3D file. The "OBJECT" method provides the most detailed and stringent instructions for scanning to produce 3D files. Meanwhile, the "SCENE" method involves capturing multiple images around the target object to create the 3D file.</p>
              <p> To summarize, when evaluating the methods based on flexibility and convenience, the order is: UPLOAD &gt; SCENE &gt; OBJECT. However, if considering the quality of the final images, the ranking is: OBJECT &gt SCENE &gt UPLOAD.</p>
            </div>
          </div>
        </div>
        <div className='section-column'>
          <div className='section-row'>
            <div className='main-text-subtitle'>
              <p>3. Guide of using OBJECT</p>
            </div>
          </div>
          <div className='section-row'>
            <div className='section-row'>
              <img src={app_object_img} className="app-image" height={400}/>
              <p className='img-intro' style={{width:'50%'}}>Step 1: Click on the target object on the screen, then rotate to a different angle and click on the object again. The app will then assist you in calculating the dimensions of the target object.</p>
            </div>
            <div className='section-row'>
              <img src={app_object_img_2} className="app-image" height={400}/>
              <p className='img-intro' style={{width:'50%'}}>Step 2: Rotate and adjust the size of the triangle box on the screen to encompass the object entirely within the box. Ensuring that the target object is fully enclosed in the box will enhance the final quality of the 3D imaging.</p>
            </div>
          </div>
          <div className='section-row'>
              <img src={app_object_img_3} className="app-image" height={400}/>
              <p className='img-intro' style={{width:'75%'}}>Step 3: There are three purple loops surrounding the target object. Gradually move around the object to capture images from various angles, including different perspectives such as looking up, looking down, and viewing at eye level. Each loop is divided into multiple small segments; a segment turns blue once its view has been successfully captured. Ensure all segments turn blue before proceeding to the next step. Depending on the object's size, the loops for looking down and looking up may be more challenging to capture. Additionally, remember to keep your phone facing the object directly to enhance the capture quality.</p>
            </div>
        </div>
        <div className='section-column'>
          <div className='section-row'>
            <div className='main-text-subtitle'>
              <p>3. Deploy 3D imaging using javascript</p>
            </div>
          </div>
          <div className='code-section'>
            <SyntaxHighlighter language="javascript" style={dark} wrapLines={true} lineProps={{style:{wordBreak: 'break-word', whiteSpace: 'pre-wrap'}}}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
    </div>
  );
}

export default HomePage;
