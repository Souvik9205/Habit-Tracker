import React from "react";

const Sidebar = ({ showSidebar }) => {
    return (
        showSidebar ? 
        <aside>
            <h1>
                sidebar
            </h1>
        </aside> : null
    );
}

export default Sidebar;