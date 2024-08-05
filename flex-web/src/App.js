import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouters } from "~/routes";
import DefaultLayout from "~/components/Layout/DefaultLayout";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouters.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        const layoutProps = {
                            headerProps: route.headerProps,
                            hideUnderHeader: route.hideUnderHeader,
                            showSitePageTitle: route.showSitePageTitle,
                            title: route.title,
                            sidebarProps: route.sidebarProps,
                        };

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout {...layoutProps}>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
