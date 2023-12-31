import React from "react";
import Timetable from "./Timetable";
import TriCalendar from "./main/TriCalender";

const Body = ({ showSidebar }) => {
    return (
        <div className={showSidebar ? 'with-sidebar' : 'without-sidebar'}>
            <TriCalendar />
            <Timetable />
        </div>
    );
};

export default Body;