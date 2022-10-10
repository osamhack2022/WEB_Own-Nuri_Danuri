import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardPage: React.FC = () => {
    return (
        <div id="Dashboard_page_container">
            
            <div id="sidebar">
                <NavLink className="m-3" to="/dashboard/userinfo"><button>to User Information</button></NavLink>
                <NavLink className="m-3" to="/dashboard/mostbenefits"><button>to Most Benefits</button></NavLink>
                <NavLink className="m-3" to="/dashboard/benefitlist"><button>to Benefit List</button></NavLink>
                <NavLink className="m-3" to="/dashboard/community"><button>to Community</button></NavLink>
                <NavLink className="m-3" to="/dashboard/hosting"><button>to Hosting</button></NavLink>
            </div>

            <div id="mainboard">
                <Outlet />
            </div>

        </div>
    )
}

export default DashboardPage;