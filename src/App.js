import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ComponenteEjemplo } from './components/ComponenteEjemplo'
import { ItemList } from './components/ItemList/itemList'
import { BrowserRouter , Switch, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/item/:itemId'>
            <ComponenteEjemplo />
          </Route>
          <Route path='/'>
            <ItemList greeting={'HOLA VISITANTE'}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
