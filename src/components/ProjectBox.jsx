const ProjectBox = ({ project , description , name}) => {
  return (
    <div id='project-box'>
        <h3>{project}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ProjectBox;