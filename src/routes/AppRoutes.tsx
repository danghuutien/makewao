import Home from "@/pages/app/Home";
import { createBrowserRouter } from "react-router-dom";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        
    },
], { basename: "/makewao" } );

export default AppRoutes