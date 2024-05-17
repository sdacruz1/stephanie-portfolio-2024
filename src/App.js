import React, { useState } from 'react';
import './App.css';
import SkillsList from './components/SkillsList';
import ExperienceList from './components/ExperienceList';

function App() {

  const [selectedExperience, setSelectedExperience] = useState(0);

  const experiences = [
    {
      workplace: 'Tripathi Bioinformatics Laboratory',
      title: 'Website Developer and Software Engineer',
      duration: 'Sept 2023 - Present',
      bullet_points: ['Led the redesign and modernization of the lab website, enhancing its representation of ongoing projects and strengthening its online presence within the campus community.',
                      'Designed and optimized the user interface (UI) and user experience (UX) for research products developed by current researchers, ensuring intuitive navigation and engagement for users.',
                      'Developed software tailored for bioinformatics analysis, starting from conceptual workflows and progressing to the creation of a fully functional product, facilitating efficient data analysis and interpretation in research projects.',
                      ],
      skills: 'Express - Node.js - Wix',
      imgs: 0
    },
    {
      workplace: 'Pawtucket Primary Care',
      title: 'Software Engineer',
      duration: 'Jun 2023 - Sept 2023',
      bullet_points: ['Spearheaded the design and launch of the Pawtucket Primary Care website, overseeing branding initiatives and developing marketing materials to enhance brand visibility and engagement.',
                      'Managed social media channels and executed targeted advertising campaigns, driving customer acquisition and retention efforts.',
                      'Cultivated strong client and provider relationships, ensuring exceptional service delivery and client satisfaction.',
                      'Organized and maintained documentation, including filling out forms and handling administrative tasks to streamline operations and ensure compliance.'],
      skills: 'Github - React (+Typescript) - Google SEO',
      imgs: 1
    },
    {
      workplace: 'Industry Partners Program',
      title: 'Software Engineer',
      duration: 'Oct 2022 - May 2023',
      bullet_points: ['Collaborated within a small team to conceptualize and develop a website, ensuring a seamless user experience throughout the design and implementation phases.',
                      'Utilized Figma to create and refine wireframes, translating design concepts into interactive prototypes.',
                      'Employed React.js to code the website, integrating a Firebase database for dynamic content management and real-time updates.',
                      'Implemented version control and deployment strategies using Github, ensuring code integrity and facilitating team collaboration in a distributed development environment.'],
      skills: 'Github - Firebase - React',
      imgs: 2
    }
  ]

  const imageArrays =  [
    ['./images/tripathi_imgs/Home.png', './images/tripathi_imgs/People.png', './images/tripathi_imgs/Publications.png'],
    ['./images/ppc_imgs/Home.png', './images/ppc_imgs/Logos.png', './images/ppc_imgs/Services.png'],
    ['./images/ipp_imgs/FinalMockup.png', './images/ipp_imgs/DesignGuide.png', './images/ipp_imgs/EarlyDesigns.png']
  ];

  const skills = ['English, Spanish, French', 'Github', 'Figma', 'Adobe Creative Cloud', 'Procreate', 'Google SEO',
                'React', 'Typescript', 'Javascript', 'HTML/CSS', 'Node.js', 'Express',
                'Firebase', 'SQL', 'GoLang', 'Python', 'C/C+', 'Unity', 'Maya', 'Blender', 'MongoDB'];

  // Function to handle click on experience bubble
  const handleExperienceClick = (index) => {
    setSelectedExperience(index);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-text-box">
          <h1>Stephanie Da Cruz</h1>
          <p className="header-text">Full Stack Developer</p>
          <p className="header-text">Websites + Software + Graphic Design</p>
          <p className="header-sub-text">Born and raised in Rhode Island</p>
          <p className="header-sub-text">Graduated from Brown University in 2023</p>
          <p className="header-sub-text">Currently based in Philadelphia, PA</p>
        </div>
        <svg className='hide-on-mobile' xmlns="http://www.w3.org/2000/svg" width="50vw" height="100%" viewBox="0 0 100 100" fill="none" overflow="hidden"> 
          <circle cx="70" cy="70" r="80" style={{fill: "#93A4FC"}}/>
          <circle cx="90" cy="80" r="60" style={{fill: "#93B0FC"}}/>
          <circle cx="110" cy="90" r="40" style={{fill: "#93BDFC"}}/>
          <circle cx="120" cy="100" r="20" style={{fill: "#DEEBEE"}}/>
          <image href="./images/silhouette.svg" width="100" height="100" x="5" y="8" />
        </svg>
      </header>

      <div style={{padding: "5% 10%"}}>
        
        <div style={{display: "flex"}}>
          <div>
          <h1>README.md</h1>
          <p className="readme_text">Reflecting on my journey entering the coding landscape, I can recall a pivotal moment during a summer at MIT's
              overnight coding camp. It was an early beginning that unfolded into a transformative experience and a genuine love for the process.
              <br/>
              <br/>
              At that camp I discovered the joy of every coder's first 'Hello World' message blinking into existence in the
              terminal. From there I embarked on a journey that would take me through endless tutorials and eventually four years of a Bachelor's
              degree in Computer Science at Brown University.
              <br/>
              <br/>
              Today I am grateful for the continuous opportunities since my sophomore year in 2022 to contribute my skills
              towards professional teams. My expertise centers on crafting compelling online presences for the teams and institutions behind
              groundbreaking projects. Occasionally, I also contribute to the development of these innovative programs.</p>
          </div>
          <img className='hide-on-mobile' src='./images/Me.JPG' alt='Myself sitting on a red chair in a sunflower field' style={{width: "20vw"}} />
        </div>

        <h2>** Experience **</h2>

        <div className="problem_div" style={{display: "flex", marginBottom: "4rem"}}>
            <div className="vertical_scroller" style={{minWidth: "50%"}}>
                <ExperienceList experiences={experiences} onClick={handleExperienceClick} />
            </div>
            <div className="vertical_scroller">
              <div className="image-container hide-on-mobile">
                {selectedExperience !== null && imageArrays[selectedExperience].map((image, index) => (
                  <img key={index} src={image} alt={`Website Examples ${index}`} />
                ))}
              </div>
            </div>
        </div>
        <h3 className='mobile_only' style={{color: "white"}}>** Image Gallery **</h3>
        <div className='horizontal_scroller mobile_only'>
            {imageArrays.map((array, majorIndex) => (
              array.map((img, index) => (
                <img className='mobile_image' key={index} src={img} alt={`Website Examples ${majorIndex}, ${index}`} />
              ))
            ))}
        </div>

        <h2>** Languages and Skills **</h2>
        <SkillsList skills={skills} />

        <p style={{width: "100%", textAlign: "right", margin: "1rem"}}>I made this website from scratch with <b>Node.js</b> and <b>React</b>, and launched it using <b>Github Pages</b>.</p>
      </div>

    </div>

  );
}

export default App;
