/* eslint-disable react/button-has-type */
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import StaffPage from './pages/StaffPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import OfficePage from './pages/OfficePage';
import AddStaff from './components/New';
import CreateAccount from './components/Create';
import './styles/index.scss';
import StaffDetails from './pages/StaffDetails';
import PrivateRoute from './components/PrivateRoute';
import AccountDetails from './pages/AccountDetails';
import ListCreateAccount from './pages/ListCreateAccount';
import ChangePassword from './pages/ChangePassword';
import useAuth from './providers/auth/context';
import EditStaff from './pages/EditStaff';

function App() {
  const { auth } = useAuth();
  return (
    <Switch>
      <Route path='/login' component={LoginPage} />
      <PrivateRoute path='/' exact component={Layout(DashboardPage)} />
      <PrivateRoute path='/changepassword' exact component={Layout(ChangePassword)} />
      {(auth.role === 'hr' || auth.role === 'admin') && (
        <>
          <PrivateRoute path='/staff' exact component={Layout(StaffPage)} />
          <PrivateRoute path='/staff/new' exact component={Layout(AddStaff)} />
          <PrivateRoute path='/staff/edit/:id' exact component={Layout(EditStaff)} />
          <PrivateRoute path='/staff/:id' exact component={Layout(StaffDetails)} />
          <PrivateRoute path='/account' exact component={Layout(AccountPage)} />
          <PrivateRoute path='/account/create' exact component={Layout(ListCreateAccount)} />
          <PrivateRoute path='/account/create/:nip' exact component={Layout(CreateAccount)} />
          <PrivateRoute path='/account/:email' exact component={Layout(AccountDetails)} />
          <PrivateRoute path='/office' exact component={Layout(OfficePage)} />
        </>
      )}
    </Switch>
  );
}

export default App;
