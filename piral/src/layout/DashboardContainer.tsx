import * as React from 'react';
import { DashboardContainerProps, DashboardTileProps } from 'piral';
import SideMenu from './SideMenu';

  export const MyDashboardContainer: React.FC<DashboardContainerProps> = ({ children }) => (
      <div className="fullLayout">
     <SideMenu></SideMenu>
  
      <div className="mainData">
        {children}
      </div>
    </div>
  );

export const MyDashboardTile: React.FC<DashboardTileProps> = ({ columns, rows, resizable, children }) => (
  <div className="tile" data-rows={rows} data-columns={columns}>
    {children}
    {resizable && <div className="tile-resizer" />}
  </div>
);
