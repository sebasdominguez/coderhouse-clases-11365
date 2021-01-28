import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import Item from './components/Item/Item'
import { ItemList } from './components/ItemList/itemList'
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import { Context } from './cartContext'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Context>
          <NavBar />
          <Switch>
            <Route path='/item/:itemId'>
              <Item />
            </Route>
            <Route path='/'>
              <ItemList />
            </Route>
          </Switch>
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
