import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from "./components/Home"
import Categories from "./components/Categories"
import UserForm from "./components/UserForm"


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/user/new' component={UserForm} />
        <Route path='/categories' component={Categories} />
      </Switch>
    </div>
  );
}

export default App;
