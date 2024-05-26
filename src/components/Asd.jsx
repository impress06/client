import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSidebar, CSidebarNav, CSidebarNavItem, CNavItem, CNav, CNavLink, CContainer } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import './App.css';

const Dashboard = () => <div>Dashboard Content</div>;
const UserManagement = () => <div>User Management Content</div>;
const Settings = () => <div>Settings Content</div>;
const Reports = () => <div>Reports Content</div>;

function Asd() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <Router>
      <div className="App d-flex">
        <CSidebar show={sidebarVisible} onShowChange={(val) => setSidebarVisible(val)}>
          <CSidebarNav>
            <CSidebarNavItem>
              <CNavLink to="/dashboard" className="nav-link">Dashboard</CNavLink>
            </CSidebarNavItem>
            <CSidebarNavItem>
              <CNavLink to="/user-management" className="nav-link">User Management</CNavLink>
            </CSidebarNavItem>
            <CSidebarNavItem>
              <CNavLink to="/settings" className="nav-link">Settings</CNavLink>
            </CSidebarNavItem>
            <CSidebarNavItem>
              <CNavLink to="/reports" className="nav-link">Reports</CNavLink>
            </CSidebarNavItem>
          </CSidebarNav>
        </CSidebar>

        <div className="main-content flex-grow-1">
          <CNav className="navbar navbar-light bg-light">
            <CNavItem>
              <CNavLink to="#" className="nav-link" onClick={() => setSidebarVisible(!sidebarVisible)}>
                Toggle Sidebar
              </CNavLink>
            </CNavItem>
          </CNav>

          <CContainer className="mt-4">
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/user-management" component={UserManagement} />
              <Route path="/settings" component={Settings} />
              <Route path="/reports" component={Reports} />
              <Route path="/" component={Dashboard} />
            </Switch>
          </CContainer>
        </div>
      </div>
    </Router>
  );
}

export default Asd;
