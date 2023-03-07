import React from "react";
import { Outlet } from "react-router-dom"


class AdmissionIndex extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <h1>Admin Pages</h1>
                <Outlet />
            </div>
        )
    }
}
export default AdmissionIndex;