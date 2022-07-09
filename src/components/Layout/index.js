import {Outlet} from 'react-router-dom';
import SideBar from '../Sidebar';
import './index.scss';


const Layout = () => {
    return (
        <div>
            <div>
                <h1>Layout/Nav</h1>
                <SideBar />
            </div>
            <Outlet />
        </div>
    )
}

export default Layout;