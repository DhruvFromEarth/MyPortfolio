import ProjectBox from '../../components/ProjectBox';

const Projects = () => {
  return (
    <div id='projects' className='slide'>
      <h1 id='projects-heading'>Projects</h1>
      <div id='projects-list'>
        <ProjectBox
          project="TenOnTen - Project Management Web Application"
          description={
          <ul>
            <li>Built a task management system using MERN Stack, where users can create, view, and assign tasks to specific team members for streamlined project tracking.</li>
            <li>Integrated a collaborative whiteboard feature that allows real-time visual brainstorming and idea sharing.</li>
            <li>Developed group and direct chat functionalities to enhance team communication within projects.</li>
          </ul>} 
          name="projectTenonten"/>
        {/* <ProjectBox project="two" description="Description for project two" /> */}
        {/* <ProjectBox project="three" description="Description for project three" /> */}
        {/* <ProjectBox project="four" description="Description for project four" /> */}
      </div>
    </div>
  )
}

export default Projects