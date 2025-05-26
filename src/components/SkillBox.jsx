const SkillBox = ({ skill }) => {
  return (
    <div id='skill-box'>
        <img id={`${skill} icon`} className='skill-icon' src={`./${skill.toLowerCase()}.png`} alt='' />
        <div id='skill-name'>{skill}</div>
    </div>
  )
}

export default SkillBox