import React from "react";
import { Outlet } from "react-router";

export default function IndexNews(){
    
        return(
            <div className="content-wrapper">
                <h1> Admission new</h1>
                <Outlet/>
            </div>
        )
    
}
