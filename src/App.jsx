import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [ projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleSelectedProject(id) {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: id
      }
    });
  }

  function handleStartAddProject() {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: null
      }
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prev => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject]
      }
    })
  }

  function handleDeleteProject() {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(project => project.id !== prev.selectedProjectId)
      }
    });
  }

  const selectedProject = projectsState.projects.find(item => item.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  }

  return (
    <main className={[
      'h-screen',
      'my-8',
      'flex',
      'gap-8'
    ].join(' ')}>
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
