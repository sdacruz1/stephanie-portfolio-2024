import React from 'react';



const ExperienceBubble = ({ experience, onClick}) => {
  const handleClick = () => {
    // Pass additional data to the onClick function
    onClick(experience.imgs); // Assuming experience has an 'id' property
  };

  return (
    <div className={`experience_bubble`} onClick={handleClick} >
      <div style={{display: "flex", justifyContent: "space-between"}}>
          <h3 className="experience_workplace"><b>{ experience.workplace }</b></h3>
          <p className="experience_duration"><i>{ experience.duration }</i></p>
      </div>
      <p className="experience_title">{experience.title}</p>
      <ul className="experience_point_list">
          {(experience.bullet_points).map((point, index) => (
            <li key={index} className="experience_point"><i>{ point }</i></li>
          ))}        
      </ul>
      <p className="experience_skills"><b>{ experience.skills }</b></p>
    </div>
  );
};

const ExperienceList = ({ experiences, onClick }) => (
  <div id="experience-container">
    {experiences.map((experience, index) => (
      <ExperienceBubble key={index} experience={experience} onClick={onClick}/>
    ))}
  </div>
);

export default ExperienceList;
