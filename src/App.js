import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navb from './Components/Navb';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className="App">
      <Navb />
      <TaskList />
    </div>
  );
}

export default App;
