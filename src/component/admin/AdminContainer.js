import React, { Component } from "react";
import { Outlet } from "react-router";
import AdminContent from "./AdminContent";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
export default function AdminContainer() {
        return (
            <>
                <AdminHeader />
                <AdminSidebar />
                <AdminContent />
                <Outlet/>
            </>
        )
}