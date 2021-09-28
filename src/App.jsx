import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import StaffPage from './pages/StaffPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import AddStaff from './components/New';
import CreateAccount from './components/Create';
import './styles/index.scss';
import StaffDetails from './pages/StaffDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/' exact component={Layout(DashboardPage)} />
        <Route path='/staff' exact component={Layout(StaffPage)} />
        <Route path='/staff/new' exact component={Layout(AddStaff)} />
        <Route path='/staff/:id' exact component={Layout(StaffDetails)} />
        <Route path='/account' exact component={Layout(AccountPage)} />
        <Route path='/account/create' exact component={Layout(CreateAccount)} />
      </Switch>
    </Router>
  );
}

export default App;
