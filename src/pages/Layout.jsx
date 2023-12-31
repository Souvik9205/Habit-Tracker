import React, { useState } from "react";
import Sidebar from "../features/Sidebar";
import Body from "../components/Body";
import Header from "../components/Header";

const Layout = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div>
            <Header toggleSidebar={toggleSidebar} />
            <div className="main-content" style={{ flex: showSidebar ? '15' : '1' }} >
                <Body showSidebar={showSidebar} />
                <Sidebar showSidebar={showSidebar}/>
            </div>
        </div>
    );
};

export default Layout;