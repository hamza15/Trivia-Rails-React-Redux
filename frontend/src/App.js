import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from "./components/Home"
import Categories from "./components/Categories"
import UserHome from "./components/UserHome"
import CategoryListItem from "./components/CategoryListItem"
import Questionaire from "./components/Questionaire"


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/categories' component={Categories} />
        <Route exact path='/user/home' component={UserHome} />
        <Route exact path='/category/:id' component={CategoryListItem} />
        <Route exact path='/questionaire' component={Questionaire} />
      </Switch>
    </div>
  );
}

export default App;
