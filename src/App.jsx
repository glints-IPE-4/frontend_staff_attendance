import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import StaffPage from './pages/StaffPage';
import LoginPage from './pages/LoginPage';
import './styles/index.scss';

function App() {
  return (
    <Router>
        <Sidebar />
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/DashboardPage' exact component={Layout(DashboardPage)} />
        <Route path='/StaffPage' exact component={Layout(StaffPage)} />
      </Switch>
    </Router>
  );
}

export default App;
