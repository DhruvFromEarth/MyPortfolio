import React from 'react'
import SkillBox from '../../components/SkillBox';

const Skills = () => {
  return (
    <div id='skills' className='slide'>
      <h1 id='skills-heading'>Skills</h1>
      <div id='skills-list'>
        <ul>
          <li><SkillBox skill="HTML" /></li>
          <li><SkillBox skill="CSS" /></li>
          <li><SkillBox skill="JavaScript" /></li>
          <li><SkillBox skill="Tailwind" /></li>
          <li><SkillBox skill="ReactJs" /></li>
          <li><SkillBox skill="NodeJs" /></li>
          <li><SkillBox skill="ExpressJs" /></li>
          <li><SkillBox skill="Git" /></li>
          <li><SkillBox skill="GitHub" /></li>
          <li><SkillBox skill="Vercel" /></li>
          <li><SkillBox skill="MongoDB" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Skills