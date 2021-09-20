import Sidebar from './Sidebar';

const Layout = Children => () =>
  (
    <>
      <Sidebar />
      <div className="container-content">
        <Children />
      </div>
    </>
  );

export default Layout;
