import './App.css';
import { Home } from './views/home/Home';
import { Sidebar } from './views/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
    <Sidebar/>
    <Home/>
    </div>
  );
}

export default App;
