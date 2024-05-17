import React from 'react';

const SkillBubble = ({ skill }) => (
  <div className="skill_bubble">
    <p className="skill_text">{skill}</p>
  </div>
);

const SkillsList = ({ skills }) => (
  <div id="skills-container" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
    {skills.map((skill, index) => (
      <SkillBubble key={index} skill={skill} />
    ))}
  </div>
);

export default SkillsList;
