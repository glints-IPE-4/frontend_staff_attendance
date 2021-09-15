import Sidebar from './Sidebar';

const Layout = Children => () =>
  (
    <>
      <Sidebar />
      <div>
        <Children />
      </div>
    </>
  );

export default Layout;
