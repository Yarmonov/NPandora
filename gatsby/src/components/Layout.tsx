import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import "../styles/index.css";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-1 max-w-4xl mx-auto p-4 md:px-8 md:py-16 w-full">{children}</main>
        </div>
    );
};

export default Layout;