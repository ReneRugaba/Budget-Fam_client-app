import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Components/login/Login';
import RouterNavigation from './Components/RouterNavigation';

function App() {

  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <RouterNavigation/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
