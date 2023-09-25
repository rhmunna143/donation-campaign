import { Outlet } from "react-router-dom";
import Nav from "../components/header/Nav";


const RootLayout = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 lg:p-0">
            <Nav></Nav>


            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;