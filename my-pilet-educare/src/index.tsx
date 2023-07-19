import * as React from 'react';
import { Link } from 'react-router-dom';
import type { MenuComponentProps, PiletApi } from 'piral';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './style/main.css';
//import Department from './component/Department';
//import User from './component/User';

const Page = React.lazy(() => import('./Page'));
const Department = React.lazy(() => import('./component/Department'));
const University = React.lazy(() => import('./component/University'));
const User = React.lazy(() => import('./component/User'));

export function setup(app: PiletApi) {
  debugger;
  const role = app.getData("Role");
  const AuthToken = app.getData("AuthToken");
  // alert(role);
  // alert(AuthToken);

  app.registerPage('/page', Page);
  app.registerPage('/Department', Department);
  app.registerPage('/University', University);
  app.registerPage('/User', User);

  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(Menu)
  app.registerTile(() => <div className="mainData">
    
    
  </div>, {
    initialColumns: 2,
    initialRows: 2,
  });

}
// page module: Menu.tsx
export const Menu: React.FC<MenuComponentProps> = ({ piral }) => (
  <div>
    <Link to="/Department">Department</Link>
    <Link to="/University">University</Link>
    <Link to="/page">Page</Link>
    <Link to="/User">User</Link>
  </div>
);


