import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import StaffPage from './pages/StaffPage';
import LoginPage from './pages/LoginPage';
import AddStaff from './components/New';
import './styles/index.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/' exact component={Layout(DashboardPage)} />
        <Route path='/staff' exact component={Layout(StaffPage)} />
        <Route path='/staff/new' exact component={Layout(AddStaff)} />
      </Switch>
    </Router>
  );
}

export default App;
