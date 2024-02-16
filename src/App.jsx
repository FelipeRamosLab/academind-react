import NewProject from './components/NewProject';
import ProjectsSidebar from './components/ProjectsSidebar';

function App() {
  return (
    <main className={['h-screen', 'my-8', 'flex', 'gap-8'].join(' ')}>
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
