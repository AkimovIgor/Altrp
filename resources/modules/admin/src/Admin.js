import React, {Component} from 'react';
import './sass/admin-style.scss';
import {hot} from "react-hot-loader";
import AdminLogo from './svgs/admin__logo.svg';
import Bars from './svgs/bars.svg';
import AllPages from './components/AllPages';
import AdminSettings from './components/AdminSettings';
import AssetSvg from './svgs/assets.svg';
import BurgerSvg from './svgs/burger.svg';
import CloseBurgerSvg from './svgs/closeburger.svg';
import DashboardSvg from './svgs/dashboard.svg';
import PagesSvg from './svgs/pages.svg';
import PluginSvg from './svgs/plugins.svg';
import ReportSvg from './svgs/reports.svg';
import SettingSvg from './svgs/settings.svg';
import TableSvg from './svgs/tables.svg';
import TemplateSvg from './svgs/templates.svg';
import UserSvg from './svgs/users.svg';
import store from './js/store/store';
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from "./components/Users";
import Assets from "./components/Assets";
import Dashboard from "./components/Dashboard";
import Plugins from "./components/Plugins";
import Reports from "./components/Reports";
import Tables from "./components/Tables";
import Templates from "./components/Templates";
import AdminModal from "./components/AdminModal";
import AddPage from "./components/AddPage";
import UserTopPanel from "./components/UserTopPanel";
import {Redirect} from "react-router";

class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      adminState: {
        adminEnable: true,
      },
      pagesMenuShow: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount(){
    store.subscribe(this.updateAdminState.bind(this));
  }

  /**
   * Срабатвыает, когда меняется adminState в store
   */
  updateAdminState(){
    let adminState = store.getState().adminState;
    this.setState(state=>{
      return{...state,adminState:{...adminState}}
    })
  }
  toggleMenu(){
    this.setState(state=>{
      return {...state, pagesMenuShow: !state.pagesMenuShow}
    })
  }
  render() {
    let adminClasses = ['admin'];
    if(!this.state.adminState.adminEnable){
      adminClasses.push('pointer-event-none');
    }
    if(this.state.pagesMenuShow){
      adminClasses.push('admin_pages-show');
    }
    return <Provider store={store}>
      <div className={adminClasses.join(' ')}>
        <Router>
          <nav className="admin-nav">
            <div className="admin-nav-top">
              <AdminLogo/>
              <Bars className="admin__bars" onClick={this.toggleMenu}/>
              <ul className="admin-nav-list">
                <li>
                  <Link to="/admin/dashboard" className="admin-nav-list__link">
                    <DashboardSvg className="icon"/>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/assets" className="admin-nav-list__link">
                    <AssetSvg className="icon"/>
                    <span>Assets</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/tables" className="admin-nav-list__link">
                    <TableSvg className="icon"/>
                    <span>Tables</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/templates" className="admin-nav-list__link">
                    <TemplateSvg className="icon"/>
                    <span>Templates</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/reports" className="admin-nav-list__link">
                    <ReportSvg className="icon"/>
                    <span>Reports</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/users" className="admin-nav-list__link">
                    <UserSvg className="icon"/>
                    <span>Users</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/plugins" className="admin-nav-list__link">
                    <PluginSvg className="icon"/>
                    <span>Plugins</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/settings" className="admin-nav-list__link">
                    <SettingSvg className="icon"/>
                    <span>Settings</span>
                  </Link>
                </li>
              </ul>
              <ul className="admin-nav-list admin-nav-list_pages">
                <li>
                  <Link to="/admin/pages" className="admin-nav-list__link">
                    <PagesSvg className="icon"/>
                    <span>Pages</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/admin/" exact>
              <Redirect to="/admin/dashboard"/>
            </Route>
            <Route path="/admin/settings">
              <AdminSettings/>
            </Route>
            <Route path="/admin/users">
              <Users/>
            </Route>
            <Route path="/admin/assets">
              <Assets/>
            </Route>
            <Route path="/admin/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/admin/plugins">
              <Plugins/>
            </Route>
            <Route path="/admin/reports">
              <Reports/>
            </Route>
            <Route path="/admin/tables">
              <Tables/>
            </Route>
            <Route path="/admin/templates">
              <Templates/>
            </Route>
            <Route path="/admin/pages" exact>
              <AllPages/>
            </Route>
            <Route path="/admin/pages/edit/:id">
              <AddPage/>
            </Route>
            <Route path="/admin/pages/add">
              <AddPage/>
            </Route>
          </Switch>
        </Router>
        <AdminModal/>
        <UserTopPanel/>
      </div>
    </Provider>;
  }
}

let _export;
if (process.env.NODE_ENV === 'production') {
  _export = Admin;
} else {
  _export = hot(module)(Admin);
}

export default _export;
