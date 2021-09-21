import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = Children => () =>
  (
    <div className='layout'>
      <Sidebar />
      <div className='container-content'>
        <TopBar />
        <Children />
      </div>
    </div>
  );

export default Layout;
