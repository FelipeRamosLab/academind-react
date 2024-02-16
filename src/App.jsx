import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';

function App() {
  const [ projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: null
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prev => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prev,
        projects: [...prev.projects, newProject]
      }
    })
  }


  console.log(projectsState)
  let content;
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  }

  return (
    <main className={[
      'h-screen',
      'my-8',
      'flex',
      'gap-8'
    ].join(' ')}>
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
