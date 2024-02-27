import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import Navbar from '../ui/dashboard/navbar/Navbar'
import "../styles/dashboard.scss";

const layout = ({ children }) => {
    return (
        <div className='dashboard-container'>
            <div className='sidebar-menu'>
                <Sidebar />
            </div>
            <div className='right-side-content'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default layout