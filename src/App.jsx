import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import './styles/index.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route psth='/' exact component={Layout(DashboardPage)} />
      </Switch>
    </Router>
  );
}

export default App;
