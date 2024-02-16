import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';

function App() {
  const [ projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleAddProject() {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: null
      }
    });
  }

  let content;
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onStartAddProject={handleAddProject} />
  }

  return (
    <main className={[
      'h-screen',
      'my-8',
      'flex',
      'gap-8'
    ].join(' ')}>
      <ProjectsSidebar onStartAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
