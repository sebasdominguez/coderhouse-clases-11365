import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { Home } from './components/Home/Home'

// PROBAR EL EXPORT DEFAULT

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home greeting={'HOLA VISITANTE'}/>
    </div>
  );
}

export default App;
