import { ROUTERS } from "./utils/router";
import HomePage from "./pages/homePage";
import {Routes, Route } from "react-router-dom";
import MasterLayout from "./pages/masterLayout";
import ProfilePage from "./pages/profilePage";
import SearchPage from "./pages/searchPage";
import ActivityPage from "./pages/activityPage";

const renderRouter = () => {
    const router = [
        {
            path: ROUTERS.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTERS.SEARCH,
            component: <SearchPage/>
        },
        {
            path: ROUTERS.ACTIVITY,
            component: <ActivityPage/>
        },
        {
            path: ROUTERS.PROFILE,
            component: <ProfilePage/>
        },

    ]
    return (
        <MasterLayout>
        <Routes>
            {
                router.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component}/>
                ))
            }
        </Routes>
        </MasterLayout>
    )
}
const Router = () =>{
    return renderRouter();
};
export default Router;